import '../styles/globals.css'
import theme from '../utils/theme'
const {color} = theme

const App = ({ Component, pageProps }) => {
  return(
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        html {
          color: ${color.white};
          background: linear-gradient(to right, ${color.royalBlue}, ${color.wisteria});
        }
      `}</style>
    </>
  )
}

export default App
