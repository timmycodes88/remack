import tw from "twin.macro"

export default function Products() {
  const products = [
    {
      name: "Shoes",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJGCp0vs77IsDr7DW-nftmJ8RUqvqwiwpaoXsJZWRp5epZER-EhYLC5R1Pud8A6e041M_m_tjJhg&usqp=CAc",
    },
    {
      name: "Hat",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJGCp0vs77IsDr7DW-nftmJ8RUqvqwiwpaoXsJZWRp5epZER-EhYLC5R1Pud8A6e041M_m_tjJhg&usqp=CAc",
    },
    {
      name: "Bucket Hat",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJGCp0vs77IsDr7DW-nftmJ8RUqvqwiwpaoXsJZWRp5epZER-EhYLC5R1Pud8A6e041M_m_tjJhg&usqp=CAc",
    },
  ]
  return (
    <>
      {products.map(product => {
        return (
          <ProductContainer>
            <ProductImage src={product.image} />
            {product.name}
          </ProductContainer>
        )
      })}
    </>
  )
}

const ProductContainer = tw.div`p-8 border-2 border-gray-500 rounded-3xl text-center font-semibold hover:cursor-pointer`
const ProductImage = tw.img`h-48`
