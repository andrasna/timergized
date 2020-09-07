import Head from 'next/head'
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

      <ProjectList />
    </>
  )
}

export default Home
