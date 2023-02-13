// import '@/styles/globals.css';
import { Navbar } from "../components";

const App=({ Component, pageProps })=> {
  return <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default App;
