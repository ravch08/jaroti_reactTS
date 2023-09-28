import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { client1, client2, client3, client4, client5, client6, client7 } from "../utils/helper";

const Clients = () => {
	return (
		<section className="clients" aria-labelledby="Our Clients">
			<div className="container">
				<Swiper
					loop={true}
					speed={1500}
					spaceBetween={30}
					grabCursor={true}
					navigation={false}
					centeredSlides={false}
					breakpoints={{
						300: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 5,
						},
						1200: {
							slidesPerView: 7,
						},
					}}
				>
					<SwiperSlide>
						<img src={client1} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client2} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client3} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client4} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client5} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client6} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client7} loading="lazy" alt="logo" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={client4} loading="lazy" alt="logo" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Clients;
