import "./product.css";
const Product = ({ data }) => {
  return (
    // <div className="product">
    //   <div className="container">
    <div key={data?.id} className="productList">
      <figure>
        <img src={data?.thumbnail} alt={data?.thumbnail} />
      </figure>
      <p>{data?.description}</p>
      <h2>Price: {data?.price}</h2>
      {/* </div>
      </div> */}
    </div>
  );
};
export default Product;
