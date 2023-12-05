import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

import Navbar from '../components/Navbar'
import Greeting from '../components/Greeting'
import AboutMe from '../components/AboutMe'

import '../styles/Home.css'
import TopicMenu from '../components/TopicMenu'

const Home: React.FC = () => {
  const topics = ["Profile", "Work Experience", "Project"]
  const Menu = <TopicMenu topics={topics} />

  return (
    <div>
      <Navbar menu={Menu} />
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
