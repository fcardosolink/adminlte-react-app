import React from 'react'
import SimpleList from '../common/widget/simple-list'
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

    const dicionario = () => {
        return [
            {
                title: 'Loja',
                value: col => col['cod']
            },
            {
                title: 'Pedidos',
                value: col => col['pedidos']
            },
            {
                title: 'Vendas',
                value: col => col['vendas']
            },
            {
                title: 'R$',
                value: col => col['valor']
            },
            {
                title: 'Situacao',
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
        <SimpleList 
            title={titulo_atual(props.vendas, props.id_cidade)}
            dic={dicionario()}
            data={lojas_da_cidade(props.vendas, props.id_cidade)}
            row_key={col => col['cod']}
        />
    )
}