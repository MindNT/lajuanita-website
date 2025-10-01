import React from 'react';
import GridGallery from '../components/GridGallery';

const GallerySection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-5xl font-bold font-inter mb-8 sm:mb-10 lg:mb-12 px-2">
          Los mejores momentos, los haces tú
        </h2>
        <GridGallery />
      </div>
    </section>
  );
};

export default GallerySection;
