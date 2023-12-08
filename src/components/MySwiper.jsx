import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Autoplay, Navigation } from 'swiper/modules';


const MySwiper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <section className="">
      {isMobile ? (
        <Swiper
          effect={'flip'}
          grabCursor={true}
          pagination={true}
          navigation={false}
          modules={[EffectFlip, Pagination, Autoplay]}
          autoplay={{ delay: 7000 }}
          slidesPerView={1}
          className="mySwiper md:w-full "
        >
          <SwiperSlide className="h-auto mb-3 overflow-hidden">
            <div className="flex flex-col gap-3 justify-evenly items-center w-full h-full gap-3 p-4">
              <h4 className="justify-self-start text-4xl w-full text-start">
                Steps: <span className="text-yellow-400">01</span>
              </h4>
              <ul>
                <li className="text-2xl w-full text-center mb-5 font-bold">
                  Insight Gathering
                </li>
                <li className="text-lg text-gray-400 mb-3">
                  Step 1: We dive deep into understanding your core audience -
                  who they are, their needs, and where they engage. At Produktivo,
                  we believe in the power of informed insights to drive successful
                  digital strategies.
                </li>
                <div className="w-50 h-auto overflow-hidden ">
                  <img src="./img/witness/1.png" className="w-full h-full object-cover" alt="" />
                </div>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-auto mb-3 overflow-hidden">
            <div className="flex flex-col gap-3 justify-evenly items-center w-full h-full gap-3 p-4">
              <h4 className="justify-self-start text-4xl w-full text-start">
                Steps: <span className="text-yellow-400">02</span>
              </h4>
              <ul>
                <li className="text-2xl w-full text-center mb-5 font-bold">
                  Strategic Development
                </li>
                <li className="text-lg text-gray-400 mb-3">
                  Step 2: At Produktivo, we craft tailored strategies focused not
                  just on attracting leads but on converting them into loyal
                  customers. Our approach goes beyond the initial sale, emphasizing
                  customer retention and long-term loyalty.
                </li>
                <div className="w-50 h-auto overflow-hidden ">
                  <img src="./img/witness/2.png" className="w-full h-full object-cover" alt="" />
                </div>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-auto mb-3 overflow-hidden">
            <div className="flex flex-col gap-3 justify-evenly items-center w-full h-full gap-3 p-4">
              <h4 className="justify-self-start text-4xl w-full text-start">
                Steps: <span className="text-yellow-400">03</span>
              </h4>
              <ul>
                <li className="text-2xl w-full text-center mb-5 font-bold z-50">
                  Execution Excellence
                </li>
                <li className="text-lg text-gray-400 mb-3">
                  Step 3: We provide personalized consultation for each unique
                  strategy, supported by our skilled team specializing in both
                  content creation, system solutions and digital marketing. With
                  Produktivo, every implementation is a step towards achieving your
                  brand's digital aspirations.
                </li>
                <div className="w-50 h-auto overflow-hidden ">
                  <img src="./img/witness/3.png" className="w-full h-full object-cover" alt="" />
                </div>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <ul className=" flex">
          <li>
            <div className="flex flex-col gap-3 justify-evenly items-center w-full h-full gap-3 p-4">
              <h4 className="justify-self-start text-4xl w-full text-start">
                Steps: <span className="text-yellow-400">01</span>
              </h4>
              <div className="text-2xl w-full text-center mb-5 font-bold">
                Insight Gathering
              </div>
              <div className="text-lg text-gray-400 mb-3">
                Step 1: We dive deep into understanding your core audience - who they
                are, their needs, and where they engage. At Produktivo, we believe in
                the power of informed insights to drive successful digital
                strategies.
              </div>
              <div className="w-50 h-auto overflow-hidden ">
                <img src="./img/witness/1.png" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-3 justify-evenly items-center w-full h-full gap-3 p-4">
              <h4 className="justify-self-start text-4xl w-full text-start">
                Steps: <span className="text-yellow-400">02</span>
              </h4>
              <div className="text-2xl w-full text-center mb-5 font-bold">
                Strategic Development
              </div>
              <div className="text-lg text-gray-400 mb-3">
                Step 2: At Produktivo, we craft tailored strategies focused not just
                on attracting leads but on converting them into loyal customers. Our
                approach goes beyond the initial sale, emphasizing customer retention
                and long-term loyalty.
              </div>
              <div className="w-50 h-auto overflow-hidden ">
                <img src="./img/witness/2.png" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-3 justify-evenly items-center w-full h-full gap-3 p-4">
              <h4 className="justify-self-start text-4xl w-full text-start">
                Steps: <span className="text-yellow-400">03</span>
              </h4>
              <div className="text-2xl w-full text-center mb-5 font-bold">
                Execution Excellence
              </div>
              <div className="text-lg text-gray-400 mb-3">
                Step 3: We provide personalized consultation for each unique
                strategy, supported by our skilled team specializing in both content
                creation, system solutions and digital marketing. With Produktivo, every
                implementation is a step towards achieving your brand's digital
                aspirations.
              </div>
              <div className="w-50 h-auto overflow-hidden ">
                <img src="./img/witness/3.png" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </li>
        </ul>
      )}
    </section>
  );
};

export default MySwiper;
