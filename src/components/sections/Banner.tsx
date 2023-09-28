import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { bannerItems } from "../utils/data";

const Banner = () => {
	return (
		<section className="banner" aria-labelledby="Main Banner">
			<div className="container">
				<Swiper
					loop={true}
					speed={3000}
					slidesPerView={1}
					spaceBetween={30}
					grabCursor={true}
					navigation={true}
					centeredSlides={true}
					modules={[Autoplay, Navigation]}
					autoplay={{
						delay: 5000,
						disableOnInteraction: true,
					}}
				>
					{bannerItems?.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<div className="banner-item">
									<picture>
										<source media="(min-width: 1025px) and (max-width: 1200px)" srcSet={item.imgSrc1200} />
										<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={item.imgSrc1024} />
										<source media="(max-width: 767px)" srcSet={item.imgSrc768} />
										<img src={item.imgSrc} alt={item.title} style={{ borderRadius: "1.2rem" }} />
									</picture>
									<div className="banner-content">
										<span className="superHeading">{item.superHeading}</span>
										<h1>{item.title}</h1>
										<p>{item.description}</p>
										<button type="button" className="btn btn-light">
											SHOP NOW
										</button>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Banner;
