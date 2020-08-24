import '../styles/globals.css'
import theme from '../utils/theme'
const {color} = theme

const App = ({ Component, pageProps }) => {
  return(
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        html {
          color: ${color.a1};
          background: linear-gradient(to bottom, ${color.b1}, ${color.c1});
        }
      `}</style>
    </>
  )
}

export default App
