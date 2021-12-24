export const navLinks = [
   { name: "home", url: "/" },
   {
      name: "categories",
      url: "/category",
      children: [
         { name: "men", url: "/category/men" },
         { name: "women", url: "/category/women" },
         { name: "kids", url: "/category/kids" },
      ],
   },
   { name: "about", url: "about", children: [] },
   { name: "contact", url: "/contact" },
]
