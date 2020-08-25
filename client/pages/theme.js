import Head from 'next/head'
import Wrapper from '../components/wrapper'
import Alert from '../components/alert'
import Lorem from '../components/lorem'

const Home = () => {
  return (
    <Wrapper type="lg">
      <Head>
        <title>Timergized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Lorem>
        <h1>Test</h1>
      </Lorem>

      <Alert type="error">Error</Alert>

      <Alert type="success">Success</Alert>

    </Wrapper>
  )
}

export default Home
