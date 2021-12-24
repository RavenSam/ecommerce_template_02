import Image from "next/image"

export default function Banner({ title = "banner", image = "/shop.jpg" }) {
   return (
      <>
         <div className="relative w-full rounded-md overflow-hidden h-64 bg-gray-800">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />

            <div className="absolute inset-0 bg-black bg-opacity-80" />

            <div className="text-white w-full absolute inset-0 flex items-center justify-center p-4">
               <h1 className="h1 tracking-wider">{title}</h1>
            </div>
         </div>
      </>
   )
}
