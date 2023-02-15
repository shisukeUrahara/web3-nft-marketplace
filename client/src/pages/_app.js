import '../styles/globals.css';
import { Navbar ,Footer} from "../components";

const App=({ Component, pageProps })=> {
  return <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default App;
