import Image from "next/image"

export default function Discount() {
   return (
      <div className="relative rounded-md overflow-hidden ">
         <Image src="/discount.jpg" alt="product" layout="fill" objectFit="cover" />

         <div className="absolute inset-0 bg-white bg-opacity-70" />

         <div className="relative md:min-h-[70vh] flex flex-col items-center justify-center text-center text-gray-800 py-8 px-2 space-y-6">
            <h2 className="h2 m-0 p-0 md:tracking-wider">Get 20% off for all our product</h2>

            <p className="max-w-md">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nobis aspernatur quisquam accusantium
               vel.
            </p>

            <button className="btn-1 md:py-3">get access now</button>
         </div>
      </div>
   )
}
