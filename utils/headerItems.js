export const navLinks = [
   { name: "home", url: "/" },
   {
      name: "categories",
      url: "/category",
      children: [
         { name: "new arrivals", url: "/category/new-arrivals" },
         { name: "men", url: "/category/men" },
         { name: "women", url: "/category/women" },
         { name: "kids", url: "/category/kids" },
      ],
   },
   { name: "about", url: "#", children: [] },
   { name: "contact", url: "#" },
]
