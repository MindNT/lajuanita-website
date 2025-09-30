import React from 'react';

const GridGallery = () => {
  const images = [
    '/images/demoimage.jpg',
    '/images/demoimage.jpg',
    '/images/demoimage.jpg',
    '/images/demoimage.jpg',
    '/images/demoimage.jpg',
    '/images/demoimage.jpg',
    '/images/demoimage.jpg'
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-[800px]">
      {/* div1 - Top right */}
      <div className="col-start-6 col-end-7 row-start-1 row-end-4 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[0]} 
          alt="Gallery 1" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* div2 - Bottom right */}
      <div className="col-start-5 col-end-7 row-start-4 row-end-7 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[1]} 
          alt="Gallery 2" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* div3 - Bottom center small */}
      <div className="col-start-3 col-end-5 row-start-5 row-end-7 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[2]} 
          alt="Gallery 3" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* div4 - Top center */}
      <div className="col-start-3 col-end-6 row-start-1 row-end-4 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[3]} 
          alt="Gallery 4" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* div5 - Middle center small */}
      <div className="col-start-3 col-end-5 row-start-4 row-end-5 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[4]} 
          alt="Gallery 5" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* div6 - Left tall */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-5 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[5]} 
          alt="Gallery 6" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* div7 - Bottom left */}
      <div className="col-start-1 col-end-3 row-start-5 row-end-7 rounded-3xl shadow-md overflow-hidden">
        <img 
          src={images[6]} 
          alt="Gallery 7" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GridGallery;
