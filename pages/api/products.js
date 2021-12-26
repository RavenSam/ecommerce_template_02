// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Data
import data from "../../products.json"

export default function handler(request, response) {
   const { method } = request

   if (method === "GET") {
      const { id, paths } = request.query

      if (id) {
         const product = data.products.data.items.find((product) => product.id.toString() === id)

         if (!product) {
            return response.status(400).json("User not found")
         }

         return response.status(200).json(product)
      } else if (paths) {
         const ids = data.products.data.items.map((item) => {
            const value = {}
            value.id = item.id
            return value
         })

         return response.status(200).json(ids)
      } else {
         return response.status(200).json({ items: data.products.data.items })
      }
   }
}
