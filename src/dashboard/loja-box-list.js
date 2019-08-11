import React from 'react'
import InfoBox from '../common/widget/info-box'

export default props => {

    const renderBox = (vendas) => {
        const vendas_resumo = vendas.map(vend => (
            { 
                id: vend.id, 
                nome: vend.nome, 
                pedidos: vend.lojas.reduce( (atual, lj) => (atual + lj.pedidos), 0 ),
                vendas: vend.lojas.reduce( (atual, lj) => (atual + lj.vendas), 0 ),
                valor: vend.lojas.reduce( (atual, lj) => (atual + lj.valor), 0 ),
            }))

        return vendas_resumo.map(vend => {
            const perc = Math.round( (vend.vendas / vend.pedidos) * 100 )
            const descricao = `${vend.vendas} Fechados de ${vend.pedidos}   (${perc}%) `
            let class_box = ''
            if (perc > 60)  {
                class_box = 'bg-green'
            } else if (perc > 50) {
                class_box = 'bg-aqua'
            } else if (perc > 40) {
                class_box = 'bg-yellow'       
            } else {
                class_box = 'bg-red'
            }

            return (
                <InfoBox
                key={vend.id}
                value={vend.valor}
                title={vend.nome}
                description={descricao}
                percent="50"
                add_class={class_box}
                icon="ion ion-bag"
                action={ () => props.selCidade(vend.id) }
                />
            )
        })
    }

    return (
        <React.Fragment>
            { renderBox(props.vendas) }
        </React.Fragment>
    )
}