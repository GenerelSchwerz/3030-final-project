// pages/_app.tsx

import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        /* Add your global styles here */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
