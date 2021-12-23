import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const category = [
   { name: "women", url: "/category/women" },
   { name: "men", url: "/category/men" },
   { name: "kids", url: "/category/kids" },
   { name: "pets", url: "/category/pets" },
]

export default function Categories() {
   return (
      <>
         <Head>
            <title>All Categories</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-5">
            <h1 className="h1">Explore by category</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-8">
               {category.map((cat, i) => (
                  <Link href={cat.url} key={i}>
                     <a className=" h-64 group">
                        <div className="relative h-full rounded-md overflow-hidden bg-gray-800">
                           <Image src="/shop.jpg" layout="fill" objectFit="cover" />
                           <div className="absolute inset-0 bg-black bg-opacity-75" />

                           <div className="text-white text-center w-full absolute bottom-0 left-0 p-4 transform translate-y-[70%] group-hover:translate-y-0 transition duration-300 ease-in">
                              <h3 className="text-xl font-semibold tracking-wider mb-4 capitalize">{cat.name}</h3>
                              <p className="max-w-sm mx-auto">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus temporibus
                                 mollitia sit consequatur eum?
                              </p>

                              <button className="btn-t mt-4">Explore now</button>
                           </div>
                        </div>
                     </a>
                  </Link>
               ))}
            </div>
         </section>
      </>
   )
}
