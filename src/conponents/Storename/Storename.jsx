function Storename() {
  return (
    <div className="storename">
      <h1>Store Name</h1>

      <button onClick={() => {alert('Товар добавлен в корзину!')}}>купить</button>
    </div>
  );
}

export default Storename;