import { GiftIcon, GlobeIcon, HeartIcon, LightningBoltIcon, SparklesIcon } from "@heroicons/react/outline"

const servicesItems = [
   {
      title: "quality product",
      icon: SparklesIcon,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rerum.",
      classes: "border-teal-500  text-teal-500",
   },
   {
      title: "wordwide shipping",
      icon: GlobeIcon,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rerum.",
      classes: "border-sky-500  text-sky-500",
   },
   {
      title: "fast delivery",
      icon: LightningBoltIcon,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rerum.",
      classes: "border-amber-500  text-amber-500",
   },
   {
      title: "all year discount",
      icon: GiftIcon,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rerum.",
      classes: "border-indigo-500  text-indigo-500",
   },
]

export default function Services() {
   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-4">
         {servicesItems.map((item, i) => (
            <div key={i} className="space-y-4 flex flex-col items-center justify-center text-center">
               <div className={`rounded-full border  h-12 w-12 p-2 ${item.classes} `}>
                  <item.icon className="" />
               </div>

               <h3 className="font-semibold text-sm sm:text-lg uppercase tracking-wide">{item.title}</h3>

               <p className="text-gray-500 text-sm md:text-base">{item.text}</p>
            </div>
         ))}
      </div>
   )
}
