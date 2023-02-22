import '../styles/globals.css';
import { Navbar ,Footer} from "../components";
import { NftMarketPlaceProvider } from 'src/Context/NftMarketPlaceContext';

const App=({ Component, pageProps })=> {
  return <div>
    <NftMarketPlaceProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </NftMarketPlaceProvider>
  </div>
}

export default App;
