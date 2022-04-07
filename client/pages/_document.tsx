import Document, { Html, Head, Main, NextScript } from "next/document";
// import Script from 'next/script';

// import "../static/js/jquery-3.6.0.min.js/index.js.js";
// import "../styles/js/parallax.js";
export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script src="static/js/jquery-3.6.0.min.js"></script>
                    <script src="static/js/fullpage.js"></script>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
