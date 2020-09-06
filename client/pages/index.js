import Head from 'next/head'
import Wrapper from '../components/wrapper'
import ProjectListViewOpts from '../components/project-list-view-opts'
import NavArea from '../components/nav-area'
import ProjectList from '../components/project-list'

const Home = () => {
  return (
    <>
    <Head>
      <title>Timergized</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavArea />

    <ProjectListViewOpts />

    <Wrapper type="normal">
      <ProjectList />
    </Wrapper>
  </>
  )
}

export default Home
