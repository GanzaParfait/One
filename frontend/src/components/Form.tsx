import { useState } from 'react'
import { addProduct } from '../api/productService'

function AddProduct () {
  const [productData, setProductData] = useState({
    productName: '',
    brand: '',
    model: '',
    date: ''
  })

  const handleChange = e => {
    setProductData({ ...productData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await addProduct(productData)
    alert('Product added successfully!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='pb-4'>Record New Product's data</h3>
      <div className='row'>
        <div className='col-md-6'>
          <div className='mb-3'>
            <label className='form-label'>Product Code</label>
            <input
              onChange={handleChange}
              type='text'
              className='form-control'
              name='productCode'
              placeholder='Product code...'
            />
            <div className='form-text'>This code will be auto-generated</div>
          </div>
        </div>
        <div className='col-md-6'>
          <label>ProductName</label>
          <input
            onChange={handleChange}
            type='text'
            className='form-control'
            name='productName'
            id='product_name'
            placeholder='Product name...'
          />
          {/* <div className='mb-3'>
            <label className='form-label'>Password</label>
            <select name='category_id' className='form-control'>
              <option value='1'>HP MSI 34</option>
              <option value='2'>Lenovo</option>
              <option value='3'>Pixel 8 pro</option>
            </select>
          </div> */}
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <label>Brand</label>
          <input
            onChange={handleChange}
            type='text'
            className='form-control'
            name='brand'
            placeholder='Brand...'
          />
        </div>

        <div className='col-md-6'>
          <label>Model</label>
          <input
            onChange={handleChange}
            type='text'
            className='form-control'
            name='model'
            id='mode'
            placeholder='Model...'
          />
        </div>
      </div>
      <div className='col-md-12'>
        <label>Date</label>
        <input
          onChange={handleChange}
          type='datetime-local'
          className='form-control'
          name='date'
          placeholder='Brand...'
        />
      </div>

      {/* <div className='mb-3 form-check'>
        <input onChange={handleChange} type='checkbox' className='form-check-input' />
        <label className='form-check-label'>Check me out</label>
      </div> */}
      <div className='row'>
        <div className='col-md-8'>
          <button type='submit' className='btn btn-primary mt-4 w-100'>
            Submit
          </button>
        </div>
        <div className='col-md-4'>
          <button type='reset' className='btn btn-danger mt-4 w-100'>
            Reset
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddProduct
