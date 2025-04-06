import { useNavigate } from 'react-router-dom'
// Create a form for our application

function UpdateProduct () {
  const navigate = useNavigate() // Hook for navigation
  return (
    <form>
      <h3 className='pb-4'>Update product details</h3>
      <div className='row'>
        <div className='col-md-6'>
          <div className='mb-3'>
            <label className='form-label'>Product Code</label>
            <input
              type='text'
              className='form-control'
              readOnly
              placeholder='Product code...'
            />
            <div className='form-text'>This code will be auto-generated</div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <select name='category_id' className='form-control'>
              <option value='1'>HP MSI 34</option>
              <option value='2'>Lenovo</option>
              <option value='3'>Pixel 8 pro</option>
            </select>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <label>ProductName</label>
          <input
            type='text'
            className='form-control'
            name='product_name'
            id='product_name'
            placeholder='Product name...'
          />
        </div>
        <div className='col-md-6'>
          <label>Brand</label>
          <input
            type='text'
            className='form-control'
            name='brand'
            placeholder='Brand...'
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <label>Model</label>
          <input
            type='text'
            className='form-control'
            name='mode'
            id='mode'
            placeholder='Model...'
          />
        </div>
        <div className='col-md-6'>
          <label>Date</label>
          <input
            type='datetime-local'
            className='form-control'
            name='brand'
            placeholder='Brand...'
          />
        </div>
      </div>

      {/* <div className='mb-3 form-check'>
          <input type='checkbox' className='form-check-input' />
          <label className='form-check-label'>Check me out</label>
        </div> */}
      <div className='row'>
        <div className='col-md-8'>
          <button type='submit' className='btn btn-primary mt-4 w-100'>
            Update
          </button>
        </div>
        <div className='col-md-4'>
          <button
            type='button'
            className='btn btn-danger mt-4 w-100'
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            Back
          </button>
        </div>
      </div>
    </form>
  )
}

export default UpdateProduct
