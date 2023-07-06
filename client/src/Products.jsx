import { useState, useEffect } from "react";

const Product = ({product_id, product_name, product_description, price}) => {
  const [updateProduct, setUpdateProduct] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);

  const deleteProduct = () => {
    fetch(`http://localhost:3000/product/delete/${product_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        window.location.reload();
      }
    })
  }

  return (
    <div className="product">
      {updateProduct ?
        <form action={`http://localhost:3000/product/update`} method="POST">
          <input type="hidden" name="productId" defaultValue={product_id} />
          <input type="text" name="productName" defaultValue={product_name} />
          <input type="text" name="productDescription" defaultValue={product_description} />
          <input type="text" name="price" defaultValue={price} />
          <button>Update</button>
        </form> :
        <div className="product-details">
          <h3>{product_name}</h3>
          <p>{product_description}</p>
          <span>{price}</span>
        </div>
      }

      {placeOrder &&
        <form action={`http://localhost:3000/order/create`} method="POST">
          <input type="number" name="quantity" />
          <button>Submit</button>
        </form>
      }
      
      <div className="product-actions">
        <button onClick={() => setUpdateProduct(prevState => !prevState)}>{!updateProduct ? 'Edit' : 'Cancel'}</button>
        <button onClick={deleteProduct}>Delete</button>
        <button onClick={() => setPlaceOrder(prevState => !prevState)}>{!placeOrder? 'Place Order' : 'Cancel'}</button>
      </div>
    </div>
  )
}

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/product/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          setProducts(data)
        })
      }
    })
  }, [])

  return (
    <>
      <form action="http://localhost:3000/product/create" method="POST">
        <input type="text" name="productName" placeholder="Enter the product name" required />
        <input type="text" name="description" placeholder="Enter the description" required />
        <input type="number" name="price" placeholder="Enter the price" required />
        <button>Submit</button>
      </form>

      <div className="existing-products">
        <h1>{products.length > 0 ? 'Our products.' : 'No existing products.'}</h1>
        {products.length > 0 && products.map(product => (
          <Product key={product.product_id} {...product} />
        ))}
      </div>
    </>
  )
}

export default Products