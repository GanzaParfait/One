import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from '../api/productService'

function ViewData () {
  // const testData = [
  //   {
  //     id: 1,
  //     productCode: 'HP-001',
  //     productName: 'HP Laptop',
  //     brand: 'HP',
  //     model: 'Pavilion',
  //     date: '2024-04-04'
  //   },
  //   {
  //     id: 2,
  //     productCode: 'MSI-002',
  //     productName: 'MSI GF63',
  //     brand: 'MSI',
  //     model: 'GF63 Thin',
  //     date: '2024-04-03'
  //   },
  //   {
  //     id: 3,
  //     productCode: 'DELL-003',
  //     productName: 'Dell XPS',
  //     brand: 'Dell',
  //     model: 'XPS 15',
  //     date: '2024-04-02'
  //   }
  // ]

  const [products, setProducts] = useState([])
  // ✅ Fetch products on component mount
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  // ✅ Delete product
  const handleDelete = async id => {
    await deleteProduct(id)
    fetchProducts() // Refresh data after deletion
  }

  const [editProduct, setEditProduct] = useState(null)

  return (
    <>
      {editProduct && (
        <div className='mb-4'>
          <h5>Edit Product</h5>
          <form
            onSubmit={async e => {
              e.preventDefault()
              await updateProduct(editProduct._id, editProduct)
              setEditProduct(null)
              fetchProducts()
            }}
          >
            <input
              type='text'
              placeholder='Product Name'
              value={editProduct.productName}
              onChange={e =>
                setEditProduct({ ...editProduct, productName: e.target.value })
              }
              className='form-control mb-2'
            />
            <input
              type='text'
              placeholder='Brand'
              value={editProduct.brand}
              onChange={e =>
                setEditProduct({ ...editProduct, brand: e.target.value })
              }
              className='form-control mb-2'
            />
            <input
              type='text'
              placeholder='Model'
              value={editProduct.model}
              onChange={e =>
                setEditProduct({ ...editProduct, model: e.target.value })
              }
              className='form-control mb-2'
            />
            <input
              type='date'
              value={new Date(editProduct.date).toISOString().split('T')[0]}
              onChange={e =>
                setEditProduct({ ...editProduct, date: e.target.value })
              }
              className='form-control mb-2'
            />
            <button type='submit' className='btn btn-success me-2'>
              Save
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={() => setEditProduct(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <h3 className='pb-4'>View Product's data</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.productCode}</td>
              <td>{product.productName}</td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{new Date(product.date).toLocaleDateString()}</td>
              <td className='d-flex gap-2'>
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => setEditProduct(product)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => handleDelete(product._id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ViewData
