import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
    return (

        <Layout
            title='Nosotros'
            description='Sobre nosotros GuitarLA tienda de musica'>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src={'/img/nosotros.jpg'} alt='Imagen sobre nosotros' width={1000} height={800}/>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quaerat enim ab omnis illum veritatis! Animi amet veritatis perferendis numquam possimus ratione. 
                            Provident amet error est ullam, quos nulla dolorem tempore.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nostrum fugiat officia 
                            facilis quisquam reiciendis inventore explicabo eos dignissimos possimus recusandae 
                            suscipit consectetur aspernatur accusamus praesentium, omnis quo blanditiis quae.</p>
                    </div>
                </div>
            </main>
        </Layout>

    )
}

export default Nosotros