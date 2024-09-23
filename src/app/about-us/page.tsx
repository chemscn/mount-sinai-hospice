import React from 'react';

const AboutUs = () => {
	return (
		<div className="px-10 m-10">
			<div className="hero bg-base-100 mt-20">
				<div className="hero-content flex-row">
					<img
						src={'/about-us-hero.png'}
						height={550}
						width={550}
						alt="hospice care "
					/>

					<div>
						<h1 className="text-3xl font-bold">
							YOUR <span className="text-primary">TRUSTED</span> HOSPICE CARE PROVIDER
						</h1>
						<p className="py-6">
							With 25 years of combined hospice experience, Mount Sinai Hospice is dedicated to
							delivering exceptional care. As a CHAP Certified and Medicare Certified provider,
							we adhere to the highest standards in the industry.
						</p>
					</div>
				</div>
			</div>
			<div className="hero bg-accent mt-20">
				<div className="hero-content flex-row-reverse">
					<img
						src={'/mission.png'}
						height={550}
						width={550}
						alt="hospice care"
					/>

					<div>
						<h1 className="text-3xl font-bold">
							OUR <span className="text-primary">MISSION</span>
						</h1>
						<p className="py-6">
							We are committed to enhancing the quality of life for our patients. Our mission is
							to provide compassionate care that meets the unique needs of each individual,
							ensuring comfort and dignity throughout their journey.
						</p>
					</div>
				</div>
			</div>
			<h1 className="my-8 text-3xl text-center">MEET OUR TEAM</h1>
			<div className="flex flex-col justify-center items-center">
				<div className="carousel lg:w-2/3 w-full mx-10">
					<div
						id="slide1"
						className="carousel-item relative w-full"
					>
						<img
							sizes="100vw"
							className="w-full"
							src={'/carousel-1.png'}
							alt="image-1"
							height={40}
							width={400}
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide4"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide2"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
					<div
						id="slide2"
						className="carousel-item relative w-full"
					>
						<img
							className="w-full"
							src={'/carousel-2.png'}
							alt="image-1"
							height={40}
							width={400}
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide1"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide3"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
					<div
						id="slide3"
						className="carousel-item relative w-full"
					>
						<img
							src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
							className="w-full"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide2"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide4"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
					<div
						id="slide4"
						className="carousel-item relative w-full"
					>
						<img
							src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
							className="w-full"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide3"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide1"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
