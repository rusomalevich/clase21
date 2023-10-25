import React, {useState, useEffect} from 'react'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        fetch('http://localhost:4040/api/products',
        {method: 'GET'}
        ). then((res) => res.json())
        .then(result => {
            setProducts(result.products)
            setLoading(false)
        })
    }, [])

    console.log(products)

  return (
    <div>
        <h1>Lista de productos</h1>
        {
            loading
            ? <h2>Cargando...</h2>
            : products.map(product => (
                <div>
                    <h3>{product.nombre}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Home