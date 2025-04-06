import axios from "axios";

// Base API URL
const API_URL = "http://localhost:5000/api/products";

// ✅ Fetch All Products
export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// ✅ Add a New Product
export const addProduct = async (productData) => {
    const response = await axios.post(`${API_URL}/add`, productData);
    return response.data;
};

// Update product
export const updateProduct = async (id, updatedProduct) => {
    const res = await fetch(`http://localhost:5000/api/products/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
    })
    return await res.json()
}
// Delete product
export const deleteProduct = async id => {
    await fetch(`http://localhost:5000/api/products/delete/${id}`, {
        method: 'DELETE'
    })
}