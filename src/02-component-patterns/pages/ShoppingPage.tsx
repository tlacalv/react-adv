import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";







export const ShoppingPage = () => {
  const {onProductCountChange, shoppingCart} = useShoppingCart();
  

  return (
    <div>
      <h1>Shopping store</h1>
      <hr></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,.2)",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product])=>(
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
              />
              <ProductButtons className="custom-buttons" />
            </ProductCard>

          ))
        }
      </div>
    </div>
  );
};
