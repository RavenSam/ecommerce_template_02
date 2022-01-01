// Data
import items from "../data.json"

// get all product returns [{}, {}, {}, ...]
export const getProducts = async (n) => {
   const data = items.products.data.items

   if (n) {
      return { data: data.slice(0, n) }
   }

   return { data }
}

// get the product by id returns object
export const getProduct = async (id) => {
   if (id) {
      const product = items.products.data.items.find((product) => product.id.toString() === id)

      if (!product) {
         return { error: "User not found" }
      }

      return { data: product }
   } else {
      return { error: "Need an ID" }
   }
}

export const getProductsByCategory = async (cat) => {
   if (cat) {
      const products = items.products.data.items.filter((product) => product.category.toString() === cat)

      if (!products) {
         return { error: "Products not found" }
      }

      return { data: products }
   } else {
      return { error: "Need a category" }
   }
}

// Get all the products path (id) returns [{ params:{ id:3453grt56 }},{ params:{ id:3453grrtg }},{...}....]
export const getPaths = async () => {
   const paths = items.products.data.items.map((item) => {
      const obj = {}
      obj.params = { id: item.id }
      return obj
   })

   return paths
}

// get all categories returns [{}, {}, {}, ...]
export const getCategories = async () => {
   const data = items.categories.data.items

   return { data }
}

// get the product by id returns object
export const getCategory = async (slug) => {
   if (slug) {
      const category = items.categories.data.items.find((cat) => cat.slug.toString() === slug)

      if (!category) {
         return { error: "category not found" }
      }

      return { data: category }
   } else {
      return { error: "Need a slug" }
   }
}
