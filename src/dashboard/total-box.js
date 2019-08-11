import React from 'react'
import SmallBox from '../common/widget/small-box'
import { Row } from '../common/layout'

export default props => {


    const renderTotais = (vendas) => {

        const totais = vendas.map(cid => (
            { 
                pedidos: cid.lojas.reduce( (atual, lj) => (atual + lj.pedidos), 0 ),
                vendas: cid.lojas.reduce( (atual, lj) => (atual + lj.vendas), 0 ),
                valor: cid.lojas.reduce( (atual, lj) => (atual + lj.valor), 0 )
            }))

        const tot_pedidos = totais.reduce( (atual, tot) => (atual + tot.pedidos), 0 )
        const tot_vendas = totais.reduce( (atual, tot) => (atual + tot.vendas), 0 )
        const tot_valor = totais.reduce( (atual, tot) => (atual + tot.valor), 0 )

        return (
            <React.Fragment>

                <SmallBox
                    value={tot_pedidos}
                    title="Total de Pedidos"
                    add_class="bg-aqua"
                    icon="ion ion-bag"
                />
    
                <SmallBox
                    value={tot_vendas}
                    sup=""
                    title="Total de Vendas"
                    add_class="bg-green"
                    icon="ion ion-stats-bars"
                />
    
                <SmallBox
                    value={`R$ ${tot_valor}`}
                    title="Valor Vendido"
                    add_class="bg-yellow"
                    icon="ion ion-stats-bars"
                />
    
                <SmallBox
                    value={tot_pedidos - tot_vendas}
                    title="Pedidos Perdidos"
                    add_class="bg-red"
                    icon="ion ion-stats-bars"
                />
            </React.Fragment>
        )

    }

    return (
        <Row>
            { renderTotais(props.vendas) }
        </Row>
    )
}
