import '../styles/global.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => console.log(window.location.pathname))
    return <Component {...pageProps} />;
  }
  