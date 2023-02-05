import Layout from '@/components/layout'
import React, { useEffect, useState } from 'react'
import styles from '../styles/carrito.module.css'
import Image from 'next/image'
import Guitarra from '@/components/guitarra'

function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calcularTotal = carrito.reduce((t, item) => t + (item.cantidad * item.precio), 0)

        setTotal(calcularTotal)
    }, [carrito])

    console.log(total)


    return (
        <Layout title="carrito de compras">
            <main className='contenedor'>
                <h1 className='heading'>Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito} >
                        <h2>Articulos</h2>
                        {
                            (carrito.length < 1)
                                ? <h3>No hay acticulos en el carrito</h3>
                                : (carrito?.map(item => (
                                    <div key={item.id} className={styles.producto}>
                                        <div>
                                            <Image src={item.imagen} alt={`Imagen guitarra - ${item.imagen}`} width={250} height={180} />

                                        </div>
                                        <div>
                                            <p className={styles.nombre}>{item.nombre}</p>
                                            <div className={styles.cantidad}>
                                                <p>Cantidad</p>
                                                <select id="cantidad"
                                                    className={styles.select}
                                                    onChange={(e) => actualizarCantidad({
                                                        id: item.id,
                                                        cantidad: e.target.value
                                                    })}
                                                    value={item.cantidad}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <button className={styles.eliminar}
                                            onClick={() => eliminarProducto(item.id) }
                                                type='button'>
                                                X
                                            </button>
                                            <p className={styles.precio}><span>${item.precio}</span></p>
                                            <p className={styles.subtotal}>Subtotal: <span>${item.cantidad * item.precio}</span></p>
                                        </div>
                                    </div>

                                )))
                        }
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido</h3>
                        <p>total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito