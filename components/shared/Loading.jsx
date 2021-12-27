import { Dialog } from "@headlessui/react"

export default function LoadingScreen() {
   return (
      <>
         <Dialog as="div" className="fixed z-50 inset-0 overflow-hidden" onClose={() => {}} open={true}>
            <Dialog.Overlay className="absolute inset-0 bg-gray-100 transition-opacity" />
            <div className="flex items-center justify-center w-full h-screen">
               <Spinner />
            </div>
         </Dialog>
      </>
   )
}

export function Spinner() {
   return (
      <div>
         <div
            style={{ borderTopColor: "transparent" }}
            className="w-10 h-10 border-4 border-black border-solid rounded-full animate-spin"
         />
      </div>
   )
}
