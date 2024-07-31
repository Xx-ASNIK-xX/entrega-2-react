import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ProductCard from '../ProductsView/ProductCard';

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <article style={{ display: 'flex', gap: 10 }}>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
            idProd={product.id}
          />
        ))}
      </article>
    </>
  );
}
