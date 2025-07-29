import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Component/Card'
import { XCircle } from 'lucide-react' 
import Loading from '../Component/Loading'

export default function Product() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    let temp = [...products]

    if (search.trim() !== '') {
      temp = temp.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sort === 'price-asc') {
      temp.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      temp.sort((a, b) => b.price - a.price)
    } else if (sort === 'name-asc') {
      temp.sort((a, b) => a.title.localeCompare(b.title))
    }

    setFilteredProducts(temp)
  }, [search, sort, products])

  function clearFilters() {
    setSearch('')
    setSort('')
  }

  return (
    <div className="container mx-auto px-4 min-h-[70vh]">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

       <select
  value={sort}
  onChange={e => setSort(e.target.value)}
  className="w-40 border border-gray-300 text-blue-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
>
  <option value="">Sort By</option>
  <option value="price-asc">Price: Low to High</option>
  <option value="price-desc">Price: High to Low</option>
  <option value="name-asc">Name: A to Z</option>
        </select>


        {(search || sort) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
            title="Clear filters"
          >
            <XCircle size={20} />
            Clear
          </button>
        )}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-10">
            <Loading />
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="flex flex-col items-center text-gray-500 py-20">
          <XCircle size={48} className="mb-4" />
          <p className="text-lg">No products found.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading &&
          filteredProducts.map(product => (
            <Card key={product.id} item={product} />
          ))}
      </div>
    </div>
  )
}
