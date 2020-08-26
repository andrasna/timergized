import Head from 'next/head'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import CallToAction from '../components/call-to-action'
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

      <CallToAction />

      <Lorem>
        <h1>Home</h1>
      </Lorem>

      <Alert type="normal">Normal</Alert>
      <Alert type="success">Success</Alert>
      <Alert type="error">Error</Alert>

    </Wrapper>
  )
}

export default Home
