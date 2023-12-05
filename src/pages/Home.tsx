import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

import Greeting from '../components/Greeting'
import AboutMe from '../components/AboutMe'

import '../styles/Home.css'

const Home: React.FC = () => {

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Content>
          <Greeting />
          <AboutMe />
        </Content>
      </Layout>
    </div>
  )
}

export default Home;
