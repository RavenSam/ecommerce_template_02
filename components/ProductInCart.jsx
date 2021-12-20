import Link from "next/link"
import Image from "next/image"
import { TrashIcon } from "@heroicons/react/outline"

const cart = [{}, {}, {}]

export default function ProductInCart({ setOpen }) {
   const removeCartItem = (id) => console.log(id)

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
                                    <Link href={`/products/${product.handle}`} passHref>
                                       <a onClick={() => setOpen(false)}>product.title</a>
                                    </Link>
                                 </h3>
                                 <p className="ml-4">$19,88</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">variantTitle</p>
                           </div>
                           <div className="flex-1 flex items-end justify-between text-sm">
                              <p className="text-gray-500">Qty {product.variantQuantity}</p>

                              <div className="flex">
                                 <button
                                    onClick={() => removeCartItem(product.id)}
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
                  <Link href="#">
                     <a className="btn-2 mt-8 inline-block">Add Items</a>
                  </Link>
               </div>
            )}
         </div>
      </>
   )
}
