import { useEffect, useState } from "react";



export default function ProductForm({ onSave, editingProduct }) {
  const emptyForm = {
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  };
  const [form, setForm] = useState(() => editingProduct || emptyForm);
  const [error, setError] = useState("");

  // Reset form when editingProduct changes (skip on initial mount)
  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm(emptyForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingProduct]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function submit(e) {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      setError("Name, Price and Category are required");
      return;
    }

    onSave(form);

    setForm({
      name: "",
      price: "",
      category: "",
      stock: "",
      description: ""
    });
  }

  return (
    <form className="product-form" onSubmit={submit}>
      <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

      {error && <div className="form-error">{error}</div>}

      <div className="form-grid">
        <div className="field">
          <label>Product Name *</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Price *</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Category *</label>
          <input name="category" value={form.category} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Stock</label>
          <input type="number" name="stock" value={form.stock} onChange={handleChange} />
        </div>

        <div className="field full">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
      </div>

      <button className="submit-btn">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
