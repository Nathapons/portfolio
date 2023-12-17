import { Layout } from 'antd'

import Greeting from '../components/Greeting'
import AboutMe from '../components/AboutMe'

import React from 'react'
import { Content } from 'antd/es/layout/layout'

const Home: React.FC = () => {

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Content>
          <Greeting />
          <AboutMe />
        </Content>
      </Layout>
    </>
  )
}

export default Home;
