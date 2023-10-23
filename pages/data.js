export async function getServerSideProps() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      return {
        props: {
          error: "Error fetching data",
        },
      };
    }
  }
  
  export default function Data({ data, error }) {
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    // Render de pagina met de opgehaalde data
    return <div>Data: {JSON.stringify(data)}</div>;
  }