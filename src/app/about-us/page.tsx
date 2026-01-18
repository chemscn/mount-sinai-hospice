import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'About Mount Sinai Hospice | Medicare-Certified Hospice in Texas',
	description: 'Learn about Mount Sinai Hospice and our mission to provide compassionate, patient-centered hospice care in Texas. Serving Harlingen, Victoria, and nearby counties.',
};
const AboutUs = () => {
	return (
		<div className="px-2 m-4 md:px-10 md:m-10">
			<div className="hero bg-base-100 mt-20">
				<div className="hero-content flex-col lg:flex-row">
					<Image
						height={550}
						width={550}
						alt="hospice care"
						src="/about-us-hero.png"
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
					<Image
						height={550}
						width={550}
						alt="hospice care"
						src="/mission.png"
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
						<Image
							alt="image-1"
							height={40}
							width={500}
							src="/carousel-1.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide4"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide2"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
					<div
						id="slide2"
						className="carousel-item relative w-full"
					>
						<Image
							alt="image-2"
							height={40}
							width={500}
							src="/carousel-2.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide1"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide3"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
					<div
						id="slide3"
						className="carousel-item relative w-full"
					>
						<Image
							alt="image-3"
							height={40}
							width={500}
							src="/carousel-3.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide2"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide4"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
					<div
						id="slide4"
						className="carousel-item relative w-full"
					>
						<Image
							alt="image-4"
							height={40}
							width={500}
							src="/carousel-4.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide3"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide5"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
					<div
						id="slide5"
						className="carousel-item relative w-full"
					>
						<Image
							alt="image-5"
							height={40}
							width={500}
							src="/carousel-5.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide4"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide6"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
					<div
						id="slide6"
						className="carousel-item relative w-full"
					>
						<Image
							alt="image-6"
							height={40}
							width={500}
							src="/carousel-6.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide5"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide7"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
					<div
						id="slide7"
						className="carousel-item relative w-full"
					>
						<Image
							alt="image-7"
							height={40}
							width={500}
							src="/carousel-7.png"
							className="w-full max-h-[800px] min-h-[800px]"
						/>
						<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a
								href="#slide6"
								className="btn btn-circle btn-primary"
							>
								&lt;
							</a>
							<a
								href="#slide1"
								className="btn btn-circle btn-primary"
							>
								&gt;
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
