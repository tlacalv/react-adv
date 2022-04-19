import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
  id: '1',
  title: 'Cofee Mug - Card',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>

      <h1>Shopping store</h1>
      <hr></hr>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Cafe'} />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
