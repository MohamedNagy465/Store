import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import Loading from '../Component/Loading'

export default function Home() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getAllProduct() {
    try {
      setLoading(true)
      setError(null)
      const { data } = await axios.get("https://fakestoreapi.com/products")
      setProduct(data)
    } catch (error) {
      setError("Failed to fetch products.")
      console.error("Error fetching products", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  if (loading) {
    return (
      <div className="pt-20 container mx-auto px-4 text-center text-xl font-semibold">
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-20 container mx-auto px-4 text-center text-red-600 font-semibold">
        {error}
      </div>
    )
  }

  return (
    <div className=' container mx-auto px-4'>
      <div className="flex justify-center">
  <h2
    className="text-3xl font-bold mb-6 text-blue-600 relative inline-block
               after:block after:w-16 after:h-1 after:bg-blue-600 after:rounded after:mt-2 after:mx-auto"
  >
    All Product
  </h2>
</div>

      {product.length === 0 ? (
        <p className="text-center text-blue-500">No products found.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {product.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  )
}
