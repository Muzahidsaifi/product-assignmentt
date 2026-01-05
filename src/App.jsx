import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import ViewToggle from "./components/ViewToggle";
import Pagination from "./components/Pagination";
import productsData from "./data/initialProducts";

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);

  const perPage = 5;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  function saveProduct(product) {
    if (product.id) {
      // EDIT
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      // ADD
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  }

  function handleEdit(product) {
    setEditingProduct(product);
  }

  return (
    <div className="container">
      <h1>Product Management</h1>

      <SearchBar onSearch={setSearch} />
      <ViewToggle view={view} setView={setView} />

      <ProductForm
        onSave={saveProduct}
        editingProduct={editingProduct}
      />

      <ProductList
        products={paginated}
        view={view}
        onEdit={handleEdit}
      />

      <Pagination
        total={filtered.length}
        perPage={perPage}
        current={page}
        onChange={setPage}
      />
    </div>
  );
}
