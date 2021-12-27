import Link from "next/link"
import Image from "next/image"
import { TrashIcon } from "@heroicons/react/outline"
import { useRecoilState } from "recoil"
import { cartState } from "../atoms/cartAtom"
import toast from "react-hot-toast"

export default function ProductInCart({ setOpen }) {
   const [cart, setCart] = useRecoilState(cartState)

   const removeCartItem = (id) => {
      setCart(cart.filter((item) => item.cartId !== id))
      toast.success("Item removed your cart")
   }

   return (
      <>
         <div className="flow-root">
            {cart.length > 0 ? (
               <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart.map((product, i) => (
                     <li key={i} className="py-6 flex">
                        <div className="relative flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                           <Image src="/products/shirt.png" alt={product.title} layout="fill" objectFit="cover" />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                           <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                 <h3>
                                    <Link href={`/products/${product.id}`} passHref>
                                       <a onClick={() => setOpen(false)}>{product.name}</a>
                                    </Link>
                                 </h3>
                                 <p className="ml-4">${product.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500 space-x-2">
                                 <span className="capitalize">{product.varient.color}</span>
                                 <span>&#8226;</span>
                                 <span className="uppercase">{product.varient.size}</span>
                              </p>
                           </div>
                           <div className="flex-1 flex items-end justify-between text-sm">
                              <p className="text-gray-500">Qty : {product.qty}</p>

                              <div className="flex">
                                 <button
                                    onClick={() => removeCartItem(product.cartId)}
                                    type="button"
                                    className="font-medium text-pink-500 hover:text-pink-800"
                                 >
                                    <TrashIcon className="h-5 w-5" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            ) : (
               <div className="text-center py-16">
                  <p className="text-gray-600 font-bold tracking-wider">Nothing in your cart!</p>
                  <Link href="/category">
                     <a className="btn-2 mt-8 inline-block" onClick={() => setOpen(false)}>
                        Add Items
                     </a>
                  </Link>
               </div>
            )}
         </div>
      </>
   )
}
