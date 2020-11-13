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
        <Col lg={12} md={24}>
          <FirstColumn>
            <img src={image} alt="just there" width="95%" />
          </FirstColumn></Col>
        <Col lg={12} md={24}>
          <SecondColumn>
            <h1>IT SKILLS CENTER</h1>
            <h3>Home For Your Technology Solutions</h3>
          </SecondColumn>
        </Col>
      </ExtendedRow>
    </Section>
  )
}
const ExtendedRow = styled(Row)`
  height: 90vh;
`
const FirstColumn = styled.div``
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1{
    margin-bottom: 30px;
    font-size: 60px;
    font-weight: bolder;
  }

  h3{
    font-size: 35px;
  }
`

export default Home
