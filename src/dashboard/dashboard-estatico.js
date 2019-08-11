import React from 'react'
import SmallBox from '../common/widget/small-box'
import { ContentSection, Row } from '../common/layout'

export default props => (

    <ContentSection>

      <Row>

        <SmallBox
            value="151"
            title="São Paulo"
            add_class="bg-aqua"
            icon="ion ion-bag"
        />

        <SmallBox
            value="100"
            sup=""
            title="Rio de Janeiro"
            add_class="bg-green"
            icon="ion ion-stats-bars"
        />

        <SmallBox
            value="44"
            title="Santa Catarina"
            add_class="bg-yellow"
            icon="ion ion-stats-bars"
        />

        <SmallBox
            value="65"
            title="Fortaleza"
            add_class="bg-red"
            icon="ion ion-stats-bars"
        />

      </Row>

    </ContentSection>

)