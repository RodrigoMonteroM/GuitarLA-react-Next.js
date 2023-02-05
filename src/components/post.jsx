import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../styles/blog.module.css"
import {formatDate} from '../helpers/helpers'
function Post({ post }) {
    //console.log(post);
    const { contenido, imagen, titulo, publishedAt, url } = post.attributes
    //console.log(contenido);
    return (
        <article>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                width={600}
                height={500}
                alt="Guitar blog" />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link className={styles.enlace}
                    href={`/blog/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}

export default Post