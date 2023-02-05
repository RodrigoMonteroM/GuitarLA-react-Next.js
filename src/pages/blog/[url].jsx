import Layout from '@/components/layout'
import React from 'react'
import Image from 'next/image';
import styles from '../../styles/blog.module.css'
import { formatDate } from '@/helpers/helpers';


export default function Post({ post }) {
  const { titulo, contenido, imagen, url, publishedAt } = post.data[0].attributes;
  //console.log(post.data[0].attributes);
  return (
    <Layout title={titulo}>
      <article className={`${styles['post']} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={500}
          alt="Guitar blog" />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
       
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ query: { url } }) {
  //console.log(url);
  const response = await fetch(`http://127.0.0.1:1337/api/posts?filters[url]=${url}&populate=imagen`)

  const post = await response.json();


  return {
    props: {
      post
    }
  }
}