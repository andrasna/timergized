import Head from 'next/head'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Lorem from '../components/lorem'

const Clients = () => {
  return (
    <Wrapper type="lg">
      <Head>
        <title>Timergized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Lorem>
        <h1>Clients</h1>
      </Lorem>

    </Wrapper>
  )
}

export default Clients
