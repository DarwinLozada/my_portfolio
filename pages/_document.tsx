import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/poppins/Poppins-Thin.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/poppins/Poppins-Medium.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/poppins/Poppins-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/poppins/Poppins-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
