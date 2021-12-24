const questions = [
   {
      q: "Question",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis natus laudantium.",
   },
   {
      q: "Question",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis natus laudantium.",
   },
   {
      q: "Question",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis natus laudantium.",
   },
   {
      q: "Question",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis natus laudantium.",
   },
   {
      q: "Question",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis natus laudantium.",
   },
   {
      q: "Question",
      a: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis natus laudantium.",
   },
]

export default function AskedQuestions() {
   return (
      <div>
         <h2 className="h2 border-b">Frequently asked questions</h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions.map((item, i) => (
               <div className="" key={i}>
                  <h3 className="h4 font-medium">{item.q}</h3>
                  <p className="text-gray-500 px-2 py-3 text-sm sm:text-base">{item.a}</p>
               </div>
            ))}
         </div>
      </div>
   )
}
