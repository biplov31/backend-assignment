
const Products = () => {
  return (
    <>
      <form action="http://localhost:3000/createproduct" method="POST">
        <input type="text" name="product-name" placeholder="Enter the product name" required />
        <input type="text" name="description" placeholder="Enter the description" required />
        <input type="number" name="price" placeholder="Enter the price" required />
        <button>Submit</button>
      </form>

      <div className="existing-products">
        <h1>No existing products.</h1>
      </div>
    </>
  )
}

export default Products