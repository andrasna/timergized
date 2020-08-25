import Head from 'next/head'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Alert from '../components/alert'
import Lorem from '../components/lorem'

const Home = () => {
  return (
    <Wrapper type="lg">
      <Head>
        <title>Timergized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Lorem>
        <h1>Home</h1>
      </Lorem>

      <Alert type="normal">Normal</Alert>

      <Alert type="error">Error</Alert>

      <Alert type="success">Success</Alert>

    </Wrapper>
  )
}

export default Home
