import Layout from '@/components/layout'
import Link from 'next/link'
import React from 'react'

function Pagina404() {
  return (
    <Layout title={`Pagina non encontrada`}>
        <p className='error'>Pagina no encontrada</p>
        <Link href='/' className='error-enlace'>Ir Al inicio</Link>
    </Layout>
  )
}

export default Pagina404