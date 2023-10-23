import "../public/scss/main.scss";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "../components/DataContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <Favicon/> */}
        {/* define the title for the website */}
        <title>MaxxTer</title>
        <meta
          name="description"
          content="Ontdek bij MaxxTer de nieuwste en krachtigste laptops voor elke behoefte. Van slanke ultrabooks tot krachtige gaminglaptops, wij hebben het perfecte apparaat voor jou. Profiteer van snelle levering, uitstekende klantenservice en scherpe prijzen. Upgrade je digitale ervaring vandaag nog met onze hoogwaardige laptops!"
        />

        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;
