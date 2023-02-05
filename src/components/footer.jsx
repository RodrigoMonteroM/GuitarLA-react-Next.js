import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/footer.module.css'
function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/" >
            Inicio
          </Link>
          <Link href="/nosotros">
            Nosotros
          </Link>
          <Link href="/tienda">
            Tienda
          </Link>
          <Link href="/blog">
            Blog
          </Link>
          

        </nav>
        <p className={styles.copyright}>Todos los derechos reservado {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer