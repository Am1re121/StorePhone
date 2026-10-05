function Products({ phones }) {
  return (
    <>
      {phones.map((phone) => (
        <div key={phone.id}>
          {phone.hasInStock ? (
            <>
              <p>{phone.name}</p>
              <p>{phone.price}</p>
              <button>купить</button>
            </>
          ) : (
            <p>Product is out of stock</p>
          )}
        </div>
      ))}
    </>
  )
}

export default Products;