import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import style from '../../styles/guitarras.module.css'
import Layout from '@/components/layout';
import Carrito from '../carrito';

function Producto({ guitarras, agregarCarrito, carrito }) {
    const [cantidad, setCantidad] = useState(0)

    const guitarraData = guitarras[0]?.attributes;
    const imagen = guitarraData.imagen.data.attributes.formats.medium.url;


    const handleSubmit = (e) => {
        e.preventDefault();

        if (cantidad < 1) {
            alert("Cantidad no valida");
            return;
        }

        const guitarraSeleccionada = {
            id: guitarras[0].id,
            imagen: guitarraData.imagen.data.attributes.formats.medium.url,
            nombre: guitarraData.nombre,
            precio: guitarraData.precio,
            cantidad
        }


        agregarCarrito(guitarraSeleccionada);
        console.log(carrito)



    }

    return (
        <Layout title={`Guitarra - ${guitarraData.nombre}`}>
            <div className={style.guitarra}>
                <Image
                    src={imagen}
                    alt={`Guitarra - ${guitarraData.nombre}`}
                    width={500}
                    height={600} />

                <div className={style.contenido}>
                    <h3>{guitarraData.nombre}</h3>
                    <p className={style.descripcion}>{guitarraData.descripcion}</p>
                    <p className={style.precio}>${guitarraData.precio}</p>

                    <form className={style.formulario} onSubmit={e => handleSubmit(e)}>
                        <label htmlFor="cantidad">Cantidad: </label>
                        <select id="cantidad"
                            onChange={e => setCantidad(+e.target.value)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value='Agregar al carrito' />
                    </form>
                </div>
            </div>
        </Layout>

    )
}

export default Producto

export async function getServerSideProps({ query: { url } }) {

    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarras } = await response.json();


    return {
        props: {
            guitarras
        }
    }
}

//export async function getStaticPaths(){
//    const response = await fetch(`${process.env.API_URL}/guitarras`);
//    const { data } =  await response.json();
//    const paths = data.map(guitarra => ({
//        params: {
//            url: guitarra.attributes.url
//        }
//    }))
//
//    return {
//        paths,
//        fallback: false,
//    }
//}


//export async function getStaticProps({ params: { url } }) {
//
//    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
//    const { data: guitarras } = await response.json();
//
//
//    return {
//        props: {
//            guitarras
//        }
//    }
//}