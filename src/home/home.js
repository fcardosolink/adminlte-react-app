import React from 'react'

import { ContentSection, Row } from '../common/layout'
import { Anchor, Video } from '../common/helper'
import { 
    TimeLine, 
    TimeLineItem,
    TimeLineLabel,
    TimeLineHeader,
    TimeLineBody,
    TimeLineFooter
} from '../common/template/time-line'

export default props => (

    <ContentSection>
        <Row>
            <TimeLine>

                <TimeLineLabel title="05 Ago. 2019" className="bg-red" />

                <TimeLineItem icon="fa fa-envelope bg-blue" time="00:00" >
                    <TimeLineHeader>
                        <Anchor href="#">@fcardoso</Anchor> Surge uma oportunidade
                    </TimeLineHeader>
                    <TimeLineBody>
                        Novo projeto. Precisamos de um novo template.
                        Vamos contruir um que possa ser reutilizável para vários projetos.
                        Moderno, simples de utilizar e que agilize o processo de contrução de app web.
                        Será constuido com React/Redux, e baseado no template AdminLTE.
                    </TimeLineBody>
                    <TimeLineFooter>
                        <Anchor className="btn btn-primary btn-xs">Ler mais</Anchor>
                        <Anchor className="btn btn-danger btn-xs">Excluir</Anchor>
                    </TimeLineFooter>
                </TimeLineItem>

                <TimeLineItem icon="fa fa-user bg-aqua" time="00:00">
                    <TimeLineHeader>
                        <Anchor href="#">Sara Young</Anchor> Aceitou o convite para o projeto
                    </TimeLineHeader>
                </TimeLineItem>

                <TimeLineItem icon="fa fa-comments bg-yellow" time="00:00" >
                    <TimeLineHeader>
                        <Anchor href="#">Jay White</Anchor> comentou o seu post
                    </TimeLineHeader>
                    <TimeLineBody>
                    Tamo junto!
                    </TimeLineBody>
                    <TimeLineFooter>
                        <Anchor className="btn btn-warning btn-flat btn-xs">View comment</Anchor>                    
                    </TimeLineFooter>
                </TimeLineItem>


                <TimeLineLabel title="09 Set. 2019" className="bg-green" />

                <TimeLineItem icon="fa fa-camera bg-purple" time="00:00" >
                    <TimeLineHeader>
                        <Anchor href="#">Mano Lee</Anchor> enviou novas fotos
                    </TimeLineHeader>
                    <TimeLineBody>
                        <img src="http://placehold.it/150x100" alt="..." className="margin" />
                    <img src="http://placehold.it/150x100" alt="..." className="margin" />
                    <img src="http://placehold.it/150x100" alt="..." className="margin" />
                    <img src="http://placehold.it/150x100" alt="..." className="margin" />

                    </TimeLineBody>

                </TimeLineItem>


                <TimeLineItem icon="fa fa-video-camera bg-maroon" time="00:00" >
                    <TimeLineHeader>
                        <Anchor href="#">Mr. Doe</Anchor> compartilhou vídeo
                    </TimeLineHeader>
                    <TimeLineBody>
                        <Video src="https://www.youtube.com/embed/tMWkeBIohBs" />
                    </TimeLineBody>

                </TimeLineItem>



            </TimeLine>
        </Row>
    </ContentSection>

)