import React from "react";
import Category from "./Category";

const Categories = () => {
  const categories = [
    {
      name: "Image",
      url: "https://example.com/page1",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    },
    {
      name: "Image 1",
      url: "https://example.com/page1",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
      name: "Image 2",
      url: "https://example.com/page2",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
      name: "Image 3",
      url: "https://example.com/page3",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
      name: "Image 4",
      url: "https://example.com/page4",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
      name: "Image 5",
      url: "https://example.com/page5",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
    {
      name: "Image 6",
      url: "https://example.com/page6",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    },
    {
      name: "Image 7",
      url: "https://example.com/page7",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    },
    {
      name: "Image 8",
      url: "https://example.com/page8",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    },
    {
      name: "Image 9",
      url: "https://example.com/page9",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    },
    {
      name: "Image 10",
      url: "https://example.com/page10",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    },
    {
      name: "Image 11",
      url: "https://example.com/page11",
      image_url:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    },
  ];

  return (
    <section className="py-5">
      <h4 className="text-center text-3xl tracking-tight font-medium sm:text-5xl text-gray sm:leading-none md:text-3xl mb-4">
        Shop By Categories
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
