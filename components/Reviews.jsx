import Review from "./Review"

export default function Reviews({ reviews }) {
   return (
      <div className="mt-10 py-5 " id="reviews">
         <h2 className="text-2xl font-bold text-center py-4 mb-4">Reviews</h2>

         <div className="flex flex-col md:flex-row items-center md:items-start  md:justify-around ">
            <div className="">
               {reviews.map((review, i) => (
                  <Review review={review} key={i} />
               ))}
            </div>

            <div className="min-w-fit p-4">
               <button className="btn-1">Add a review</button>
            </div>
         </div>
      </div>
   )
}
