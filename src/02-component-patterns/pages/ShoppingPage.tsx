import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Cofee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,.2)",
            }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70d1f8",
          }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,.2)",
            }}
          />
          <ProductTitle
            style={{
              fontWeight: "bold",
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
