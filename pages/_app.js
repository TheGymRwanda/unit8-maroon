import '../styles/globals.css';
// import localFont from '@next/font/local';

// const Neufile = localFont({ src: '../public/assets/font/NeufileGrotesk-Regular.woff2' });

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
