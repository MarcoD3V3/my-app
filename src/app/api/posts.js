export default async function handler(req, res) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos de la API" });
  }
}

export async function getStaticProps() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error al obtener los datos de la API",
      },
    };
  }
}
