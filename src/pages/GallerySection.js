import React from 'react';
import GridGallery from '../components/GridGallery';

const GallerySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-5xl font-bold font-inter mb-12">
          Los mejores momentos, los haces tú
        </h2>
        <GridGallery />
      </div>
    </section>
  );
};

export default GallerySection;
