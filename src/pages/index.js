import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";
import Guitarra from "@/components/guitarra";
import Post from "@/components/post";
import Curso from "@/components/curso";

export default function Home({ guitarras, posts, curso }) {
  //console.log(posts);
  console.log(curso);
  return (
    <>
      <Layout title="Home" description="Ventas de Guitarras y mas">
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>

          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
          </div>
        </main>

        <Curso curso={curso}/>

        <section className="contenedor">
          <h2 className="heading">Posts</h2>
          <div className={styles.grid}>
            {
              posts?.map(post => (
                <Post key={post.id} post={post}/>
              ))
            }
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [restGuitarras, resPost, restCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);

  const [{ data: guitarras }, { data: posts }, {data: curso}] = await Promise.all([
    restGuitarras.json(),
    resPost.json(),
    restCurso.json()
  ]);

  return {
    props: {
      guitarras,
      posts,
      curso
    },
  };
}
