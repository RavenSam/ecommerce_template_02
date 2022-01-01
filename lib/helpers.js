import toast from "react-hot-toast"

export const addToCart = (setCart, viewProduct, cart, productColor, selectedSize = "m", qty = 1) => {
   // return product if the product in cart and the product to add
   //  have the same id & color & size else return undefined
   console.log(viewProduct)
   const findProduct = cart.find(
      (item) =>
         item.id === viewProduct.id &&
         item.varient.color.color === productColor.color &&
         item.varient.size === selectedSize
   )

   // if product exist add qty
   if (findProduct) {
      const newCart = cart.map((item) =>
         item.cartId === findProduct.cartId ? { ...findProduct, qty: findProduct.qty + +qty } : item
      )

      setCart(newCart)
      toast.success("Item added to your cart")
   } else {
      const newCart = [
         ...cart,
         {
            ...viewProduct,
            cartId: cart.length + Math.random(),
            qty,
            varient: { color: productColor, size: selectedSize },
            imgVarient: viewProduct.varients.find((x) => x.color === productColor.color).images[0],
         },
      ]

      setCart(newCart)
      toast.success("Item added to your cart")
   }
}
