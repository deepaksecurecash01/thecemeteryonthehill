<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-end overflow-hidden w-full mt-8">
  {[...Array(6)].map((_, index) => (
    <div
      key={index}
      className={`relative col-span-1 flex justify-center items-end w-full ${
        index > 2 ? "hidden sm:flex" : "" // Hide images from index 3 onwards on small screens
      } ${
        index > 3 && index < 6 ? "hidden md:flex" : "" // Hide images from index 4 onwards on medium screens
      } ${
        index > 5 ? "hidden lg:flex" : "" // Hide images from index 6 onwards on large screens
      }`}
    >
      <Image
        src={`/images/-${index + 80}.jpg`}
        alt={`Image ${index + 1}`}
        className="rounded-t-2xl absolute object-cover"
        layout="fill"
      />
    </div>
  ))}
</div>;


 const [items] = useState([
   {
     review:
       "This platform has transformed our business processes. The intuitive design and robust features make it a must-have for any enterprise.",
     rating: 5,
     fullname: "Deepak Kumar",
     position: "Project Manager",
     image: "/images/testimonials/dk.png",
   },
   {
     review:
       "Excellent customer service and a product that truly delivers on its promises. We’ve seen significant improvements in efficiency.",
     rating: 5,
     fullname: "Bob Smith",
     position: "Senior Developer",
     image: "/images/testimonials/download.jpeg",
   },
   {
     review:
       "A fantastic solution for our team's collaboration needs. The seamless integration with our existing tools is a game-changer.",
     rating: 4,
     fullname: "Charlie Brown",
     position: "Product Owner",
     image: "/images/testimonials/download (1).jpeg",
   },
   {
     review:
       "User-friendly interface and outstanding performance. It’s been a vital tool for our day-to-day operations.",
     rating: 5,
     fullname: "Dana White",
     position: "Business Analyst",
     image: "/images/testimonials/images.jpeg",
   },
   {
     review:
       "The best investment we’ve made this year. The features are exactly what we needed, and the support team is phenomenal.",
     rating: 5,
     fullname: "Eli Martinez",
     position: "IT Director",
     image: "/images/testimonials/images (1).jpeg",
   },
   {
     review:
       "Highly recommend this software to any organization looking to streamline their workflows. It’s both powerful and easy to use.",
     rating: 5,
     fullname: "Fiona Clark",
     position: "Operations Manager",
     image: "/images/testimonials/images (2).jpeg",
   },
 ]);