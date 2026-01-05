export default function ProductCard({ product, onEdit }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>Stock: {product.stock}</p>

      <button
        style={{ marginTop: "10px" }}
        onClick={() => onEdit(product)}
      >
        Edit
      </button>
    </div>
  );
}
