import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];

  const [carrito, setCarrito] = useState(carritoLS);
  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    setPaginaLista(true);
  }, []);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraCarrito) => {
        if (guitarraCarrito.id === guitarra.id) {
          guitarraCarrito.cantidad = guitarra.cantidad;
        }
        return guitarraCarrito;
      });

      setCarrito([...carritoActualizado]);
    } else {
      setCarrito([...carrito, guitarra]);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = +guitarra.cantidad;
        console.log(guitarraState);
      }
      return guitarraState;
    });

    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return paginaLista ? (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  ) : null;
}
