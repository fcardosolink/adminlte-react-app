import React from 'react'
import { ContentSection, Row, Grid } from '../common/layout'
import { Anchor } from '../common/helper'
import Callout from '../common/template/callout'
import Box from '../common/template/box'
import Modal from '../common/template/modal'
import { ButtonDefault, ButtonInfo, ButtonWarning, ButtonDanger, ButtonSucess } from '../common/ui'


export default props => (

    <ContentSection>
        <Callout type='info'> 
            <h4>Lembrete!</h4>
            Instruções para usar modais estão disponíveis em &nbsp;
            <Anchor href="http://getbootstrap.com/javascript/#modals">Bootstrap documentation</Anchor>
        </Callout>

      <Row>
        <Grid cols="12">
            <Box type="default" title="Exemplos de Modal">
                 Incluímos as propriedades <strong>onClose</strong> e <strong>onConfirm</strong>. Dois métodos para interagir com os botões de ação da dialog.<br />

                <ButtonDefault data-toggle="modal" data-target="#modal-default">
                    Lançar Modal Default
                </ButtonDefault>

                <ButtonInfo data-toggle="modal" data-target="#modal-info">
                    Lançar Modal Info
                </ButtonInfo>

                <ButtonDanger data-toggle="modal" data-target="#modal-danger">
                    Lançar Modal Danger
                </ButtonDanger>

                <ButtonWarning data-toggle="modal" data-target="#modal-warning">
                    Lançar Modal Warning
                </ButtonWarning>

                <ButtonSucess data-toggle="modal" data-target="#modal-success">
                    Lançar Modal Sucess
                </ButtonSucess>
            </Box>
        </Grid>
      </Row>

      <Modal 
        title="Modal Default" 
        id="modal-default"
        onClose={ props => alert('fechar modal default') }
        onConfirm={ props => {alert('confirma modal default'); return true} }
        >
            Está é uma modal default
      </Modal>

      <Modal title="Modal Info" type="info" id="modal-info">
            Está é uma modal info
      </Modal>

      <Modal title="Modal Warning" type="warning" id="modal-warning">
            Está é uma modal warning
      </Modal>

      <Modal title="Modal Danger" type="danger" id="modal-danger">
            Está é uma modal danger
      </Modal>

      <Modal title="Modal Success" type="success" id="modal-success">
            Está é uma modal success
      </Modal>

    </ContentSection>

)        