import Col from 'antd/lib/grid/col'
import Row from 'antd/lib/grid/row'
import React from 'react'
import styled from 'styled-components'
import Section from '../ui/Section'

const image = './assets/background.png'

const Home = () => {
  return (
    <Section>
      <ExtendedRow>
        <Col span={12}>
          <FirstColumn>
            <img src={image} alt="just there" width="80%" />
          </FirstColumn></Col>
        <Col span={12}><SecondColumn></SecondColumn></Col>
      </ExtendedRow>
    </Section>
  )
}
const ExtendedRow = styled(Row)`
  height: 90vh;
`
const FirstColumn = styled.div``
const SecondColumn = styled.div``

export default Home
