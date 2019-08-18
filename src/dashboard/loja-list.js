import React from 'react'
import SimpleTable from '../common/tables/simple-table'
import { LabelSucess, LabelInfo, LabelWarning, LabelDanger } from '../common/ui'

export default props => {

    const label_status = (col) => {
        const perc = Math.round( (col['vendas'] / col['pedidos'] * 100 ) )
        if (perc > 60)  {
            return <LabelSucess title="sucesso"/>
        } else if (perc > 50) {
            return <LabelInfo title="bom"/>
        } else if (perc > 40) {
            return <LabelWarning title="melhorar"/>
        }
        return <LabelDanger title="perigo"/>
    }

    const colunas = () => {
        return [
            {
                title: 'Loja',
                name: 'cod',
            },
            {
                title: 'Pedidos',
                name: 'pedidos',
            },
            {
                title: 'Vendas',
                name: 'vendas',
            },
            {
                title: 'R$',
                name: 'valor',
            },
            {
                title: 'Situacao',
                name: 'situacao',
                value: col => label_status(col)
            }
        ]
    }

    const lojas_da_cidade = (vendas, id_cidade) => {
        for( let i in vendas) {
            if (vendas[i].id === id_cidade)
                return vendas[i].lojas
        }
        return []
    }

    const titulo_atual = (vendas, id_cidade) => {
        for( let i in vendas) {
            if (vendas[i].id === id_cidade)
                return vendas[i].nome
        }
        return 'Cidade não localizada'
    }

    return (
        <SimpleTable 
            title={titulo_atual(props.vendas, props.id_cidade)}
            columns={colunas()}
            data={lojas_da_cidade(props.vendas, props.id_cidade)}
            row_key={col => col['cod']}
            onClickHeader={ (coluna, asc) => props.ordenarCidade(coluna, asc) }
            sort_column={ props.ordenar_por }
            sort_asc={ props.ordem_asc }
        />
    )
}
