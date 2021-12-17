import { Fragment, useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

export default function CarouselImages({ carouselDetails }) {
   const [showcase, setShowcase] = useState(1)

   const nextSlide = () => (showcase < carouselDetails.length ? setShowcase(+showcase + 1) : setShowcase(1))

   const prevSlide = () => (showcase > 1 ? setShowcase(+showcase - 1) : setShowcase(+carouselDetails.length))

   // const interval = 8000
   // Auto Slide every <interval>
   // useEffect(() => setInterval(nextSlide, interval), [])

   return (
      <div className="relative">
         <div className="w-full h-96 overflow-hidden">
            {carouselDetails.map((item, i) => (
               <Fragment key={i}>
                  <Transition
                     show={i + 1 === showcase}
                     enter=" transition ease-in-out duration-500 "
                     enterFrom=" opacity-0"
                     enterTo=" opacity-1"
                     leave=" transition ease-in-out duration-700 "
                     leaveFrom=" opacity-1"
                     leaveTo=" opacity-0"
                     as={Fragment}
                  >
                     <div className={`absolute inset-0 w-full  h-full rounded-md  ${item.color}`}></div>
                  </Transition>

                  <div className="absolute max-w-2xl  left-1/4 h-full flex items-center">
                     <Transition show={i + 1 === showcase}>
                        <Transition.Child
                           enter="transform transition ease-in-out duration-[2s] "
                           enterFrom="translate-x-16 opacity-0"
                           enterTo="translate-y-0 opacity-1"
                           leave="transform transition ease-in-out duration-700 "
                           leaveFrom="translate-y-0 opacity-1"
                           leaveTo="translate-y-5 opacity-0"
                        >
                           <h3 className="text-3xl capitalize text-white py-5  font-semibold">{item.title}</h3>
                        </Transition.Child>

                        <Transition.Child
                           enter="transform transition ease-in-out duration-[1.5s] delay-1000"
                           enterFrom="-translate-y-8 opacity-0"
                           enterTo="translate-y-0 opacity-1"
                           leave="transform transition ease-in-out duration-700 "
                           leaveFrom="translate-y-0 opacity-1"
                           leaveTo="translate-y-5 opacity-0"
                        >
                           <p className="text-gray-300 ">{item.text}</p>
                        </Transition.Child>
                     </Transition>
                  </div>
               </Fragment>
            ))}
         </div>

         <button
            className="bg-white text-white shadow-sm bg-opacity-20 py-4 px-2 rounded-md transform -translate-y-1/2 absolute top-1/2 left-5 opacity-70 hover:opacity-100"
            onClick={prevSlide}
         >
            <ChevronLeftIcon className="h-6 w-6" />
         </button>
         <button
            className="bg-white text-white shadow-sm bg-opacity-20 py-4 px-2 rounded-md transform -translate-y-1/2 absolute top-1/2 right-5 opacity-70 hover:opacity-100"
            onClick={nextSlide}
         >
            <ChevronRightIcon className="h-6 w-6" />
         </button>
      </div>
   )
}
