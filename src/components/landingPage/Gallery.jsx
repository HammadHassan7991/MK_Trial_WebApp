import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const galleryImages = [
  require('../../assets/gallery/G1.png'),
  require('../../assets/gallery/G2.png'),
  require('../../assets/gallery/G3.png'),
  require('../../assets/gallery/G4.png'),
  require('../../assets/gallery/G1.png'),
  require('../../assets/gallery/G2.png'),
  require('../../assets/gallery/G3.png'),
  require('../../assets/gallery/G4.png'),
];

export default function ShowGallery() {
  const [showAll, setShowAll] = useState(false);

  const toggleGallery = () => setShowAll((prev) => !prev);

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 4);

  return (
    <section className="py-10 md:py-16 px-4 bg-white">
      <h2 className="text-center text-[#222222] font-helveticaRounded text-2xl sm:text-3xl lg:text-[32px] mb-10">
        Customer Gallery
      </h2>

      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
          spaceBetween={16}
          slidesPerView={1.2}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {displayedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-auto"
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={toggleGallery}
          className="hidden md:inline-block bg-[#D4B254] hover:bg-[#bfa048] text-white text-sm px-6 py-2 rounded-full uppercase tracking-wide transition"
        >
          {showAll ? 'Show Less' : 'View More'}
        </button>
      </div>
    </section>
  );
}
