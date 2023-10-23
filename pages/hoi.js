import { getServerSideProps } from "./data";

function AnderePagina({ data }) {
  // Gebruik de opgehaalde data in deze pagina
  return <div>Data op andere pagina: {JSON.stringify(data)}</div>;
}

export { getServerSideProps };
export default AnderePagina;