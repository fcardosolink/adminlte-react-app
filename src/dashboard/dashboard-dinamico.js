import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { obterVendas, selecionarCidade, ordenarCidade } from './dashboard-action'
import { ContentSection, Row, Grid } from '../common/layout'


import TotalBox from './total-box'
import LojaBoxList from './loja-box-list'
import LojaList from './loja-list'


class DashboardDinamico extends Component {

    componentWillMount() {
        this.props.obterVendas('br-sp')
    }


    render() {
        return(
            <ContentSection>
                <TotalBox vendas={this.props.dashboard.vendas}/>
                <Row>
                    <Grid cols="12 4 4">
                        <LojaBoxList 
                            vendas={this.props.dashboard.vendas} 
                            selCidade={ (cidade) => this.props.selecionarCidade(cidade) }
                        />
                    </Grid>
                    <Grid cols="12 8 8">
                        <LojaList 
                            vendas={this.props.dashboard.vendas} 
                            id_cidade={this.props.dashboard.cidade_atual}
                            ordenar_por={this.props.dashboard.ordem_coluna}
                            ordem_asc={this.props.dashboard.ordem_asc}
                            ordenarCidade= { (coluna, asc) => this.props.ordenarCidade(coluna, asc) }
                            />
                    </Grid>
                </Row>
            </ContentSection>
        )
    }

}

const mapStateToProps = state => ({dashboard: state.dashboard})
const mapDispatchToProps = dispatch => bindActionCreators({obterVendas, selecionarCidade, ordenarCidade}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashboardDinamico)

