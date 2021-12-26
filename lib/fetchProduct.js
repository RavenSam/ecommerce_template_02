// get all product returns [{}, {}, {}, ...]
export const getProducts = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`)
   const data = await res.json()

   return { data }
}

// get the product by id returns object
export const getProduct = async (id) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?id=${id}`)
   const data = await res.json()

   return { data }
}

// Get all the path (id) returns [{ params:{ id:3453grt56 }},{ params:{ id:3453grrtg }},{...}....]
export const getPaths = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products?paths=true`)
   const data = await res.json()

   const paths = await data.map((item) => {
      const obj = {}
      obj.params = { id: item.id }
      return obj
   })

   return paths
}
