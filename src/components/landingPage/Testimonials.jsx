import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { ReactComponent as ArrowLeft } from '../../assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';

const testimonials = [
  {
    name: 'Jane, Dundee',
    title: 'Over 35 years experience designing handmade kitchens',
    content:
      'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
  },
  {
    name: 'Tom, Glasgow',
    title: 'Exceptional craftsmanship and support',
    content:
      'The team helped me customise every inch of my kitchen. They were always helpful and made sure it matched my vision perfectly.',
  },
  {
    name: 'Sophie, Edinburgh',
    title: 'Incredible attention to detail',
    content:
      'Every piece feels handmade and personal. It’s rare to find this level of care from start to finish.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#EEEEEE] py-20 px-4">
      <div className="max-w-[90%] mx-auto">
        <div className="max-w-[80%] mx-auto">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 relative">
            <div className="prev-arrow cursor-pointer">
              <ArrowLeft className="w-12 h-12 text-highlight" />
            </div>

            <div className="w-full max-w-3xl text-center">
              <p className="font-roboto text-[#D4B254] text-sm md:text-[13px] text-xs tracking-widest mb-2">
                What our customers say
              </p>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.prev-arrow',
                  nextEl: '.next-arrow',
                }}
                loop
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <h2 className="font-helveticaRounded text-[#222222] sm:text-3xl lg:[42px] mb-4">
                      {t.title}
                    </h2>
                    <p className="text-body text-base md:text-lg mb-4">
                      {t.content}
                    </p>
                    <p className="text-sm font-medium text-title mt-2">
                      {t.name}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="next-arrow cursor-pointer">
              <ArrowRight className="w-12 h-12 text-highlight" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-8 flex border border-[#D4B254] bg-[#D4B254] text-white text-xs md:text-[15px] tracking-wider px-6 py-3 rounded-full uppercase transition">
              Frequently Asked Questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
