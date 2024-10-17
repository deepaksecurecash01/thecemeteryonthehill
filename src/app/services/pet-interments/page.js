import ContentSection from '@/components/services/pet-interments/ContentSection';
import React from 'react'

export const metadata = {
  title: "Pet Interments",
  description:
    "Honour the memory of your cherished pets with dignified pet interment services at The Cemetery on The Hill. Explore our peaceful and respectful setting for pet burials and ashes interments.",
  keywords:
    "Pet Interments, pet cemetery, pet ashes, pet burial, pet memorial, animal interment, dignified pet resting place, The Cemetery on The Hill",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/services/pet-interments",
};


const page = () => {
  return (
    <div className="relative">
      <ContentSection />
    </div>
  );
}

export default page