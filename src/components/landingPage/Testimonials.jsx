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
    <section className="bg-[#F5F5F5] py-20 px-4">
      <div className="maw-w-[80%] mx-auto">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 relative">
          {/* Left Arrow */}
          <div className="prev-arrow cursor-pointer">
            <ArrowLeft className="w-12 h-12 text-highlight" />
          </div>

          {/* Swiper Content */}
          <div className="w-full max-w-3xl text-center">
            <p className="text-xs uppercase text-highlight tracking-widest mb-2">
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
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    {t.title}
                  </h2>
                  <p className="text-body text-base mb-4">{t.content}</p>
                  <p className="text-sm font-medium text-title mt-2">
                    {t.name}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <div className="next-arrow cursor-pointer">
            <ArrowRight className="w-12 h-12 text-highlight" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-8 flex border border-yellow-600 bg-highlight text-black text-xs tracking-wider px-6 py-3 rounded-full uppercase hover:bg-yellow-600 transition">
            Frequently Asked Questions
          </button>
        </div>
      </div>
    </section>
  );
}
