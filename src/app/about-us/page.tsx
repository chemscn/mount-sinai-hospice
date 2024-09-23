import React from 'react';


const AboutUs = () => {
	return (
		<div className="px-2 m-4 md:px-10 md:m-10">
			<div className="hero bg-base-100 mt-20">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={`${process.env.NEXT_PUBLIC_BASE_PATH}/about-us-hero.png`}
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
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={`${process.env.NEXT_PUBLIC_BASE_PATH}/mission.png`}
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
				<div className="carousel lg:w-2/3 w-full lg:mx-10">
					<div
						id="slide1"
						className="carousel-item relative w-full"
					>
						<img
							sizes="100vw"
							className="w-full"
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-1.png`}
							alt="image-1"
							height={40}
							width={500}
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
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-2.png`}
							alt="image-1"
							height={40}
							width={500}
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
							className="w-full"
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-3.png`}
							alt="image-1"
							height={40}
							width={500}
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
							className="w-full"
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-4.png`}
							alt="image-1"
							height={40}
							width={500}
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide3"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide5"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
					<div
						id="slide5"
						className="carousel-item relative w-full"
					>
						<img
							className="w-full"
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-5.png`}
							alt="image-1"
							height={40}
							width={500}
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide4"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide6"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
					<div
						id="slide6"
						className="carousel-item relative w-full"
					>
						<img
							className="w-full"
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-6.png`}
							alt="image-1"
							height={40}
							width={500}
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide5"
								className="btn btn-circle"
							>
								❮
							</a>
							<a
								href="#slide7"
								className="btn btn-circle"
							>
								❯
							</a>
						</div>
					</div>
					<div
						id="slide7"
						className="carousel-item relative w-full"
					>
						<img
							className="w-full"
							src={`${process.env.NEXT_PUBLIC_BASE_PATH}/carousel-7.png`}
							alt="image-1"
							height={40}
							width={500}
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide6"
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
