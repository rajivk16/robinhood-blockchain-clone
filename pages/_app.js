import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { RobinhoodProvider } from '../context/RobinhoodContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://qrsoxotgbwqc.usemoralis.com:2053/server'
      appId='eqARtyVwkQUGEbRvD44MpeMc293fLjkTop7kjJiT'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
