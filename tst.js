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
