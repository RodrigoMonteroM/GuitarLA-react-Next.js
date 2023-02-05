import Layout from "@/components/layout";
import React from "react";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css";

function Tienda({ guitarras }) {
  return (
    <Layout
      title="Tienda"
      description='Tienda virtual, vende guitarras, instruemntos, GuitarLA"'
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Coleccion</h2>

        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Tienda;

//export async function getStaticProps() {
//  const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//  const { data: guitarras } = await response.json();
//
//
//  return {
//    props: {
//      guitarras,
//    },
//  };
//}

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );

  const { data: guitarras } = await response.json();

  return {
    props: {
      guitarras,
    },
  };
}
