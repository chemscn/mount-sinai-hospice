import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className="hero bg-accent min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						className="fl-row fl-row-full-width fl-row-bg-photo fl-node-qi4ua1zv79fk fl-row-default-height fl-row-align-center"
						decoding="async"
						alt="woman-taking-care-of-patient"
						src={'/hero-1.png'}
						height={720}
						width={797}
						sizes="(max-width: 797px) 125vw, 797px"
						title="Mount Sinai Hospice"
					/>

					<div>
						<h1 className="text-5xl font-bold">
							SPECIALIZED HOSPICE SUPPORT FOR A{' '}
							<span className="text-primary">PEACEFUL JOURNEY</span>
						</h1>
						<p className="py-6">
							25 Years of Ensuring Patients in Texas Receive the Highest Standard of Comfort and
							Respect
						</p>
						<Link
							href={'/contact-us'}
							className="btn btn-primary font-bold text-lg"
						>
							Book a Consultation
						</Link>
					</div>
				</div>
			</div>
			<div className="text-center my-4 ">
				<h1 className="text-3xl font-bold">WHY CHOOSE US?</h1>
				<p className="text-md my-1 text-primary">We Are Looking for Volunteers to Join Our Team.</p>
			</div>
			<div className="flex flex-row flex-wrap gap-4 justify-center my-2">
				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<img
							src={'/flag.png'}
							style={{ minHeight: 200 }}
							height={200}
							width={300}
							alt="texas"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Locally and Veteran Owned</h2>
						<p>
							Proudly locally and veteran-owned, Mount Sinai Hospice brings a personal touch and
							dedication to quality care.
						</p>
					</div>
				</div>
				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<img
							src={'/texas.png'}
							style={{ minHeight: 200 }}
							width={200}
							height={200}
							alt="texas"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Statewide Service</h2>
						<p>
							We provide compassionate hospice care across Texas, including Cameron, Hidalgo,
							Willacy, and Starr Counties.
						</p>
					</div>
				</div>
				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<img
							src={'/certified.png'}
							style={{ minHeight: 200 }}
							width={200}
							height={200}
							alt="texas"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Certified Excellence</h2>
						<p>
							As a CHAP Certified and Medicare Certified provider, we adhere to the highest
							standards of hospice care.
						</p>
					</div>
				</div>
				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<img
							src={'/coverage.png'}
							style={{ minHeight: 200 }}
							width={300}
							height={200}
							alt="texas"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Comprehensive Coverage</h2>
						<p>
							We accept Medicare reimbursement, covering all clinical services, medications, and
							necessary supplies.
						</p>
					</div>
				</div>
			</div>
			<div className="hero bg-base-100 mt-20">
				<div className="hero-content lg:flex-row  flex-col">
					<img
						src={'/trusted-1.png'}
						height={550}
						width={550}
						alt="hospice care "
					/>

					<div>
						<h1 className="text-3xl font-bold">
							<span className="text-primary">TRUSTED</span> &{' '}
							<span className="text-primary">RELIABLE</span> HOSPICE IN TEXAS
						</h1>
						<p className="py-6">
							At Mount Sinai Hospice, we have been committed to providing compassionate and
							reliable hospice care across Texas since 2021. Your health and well-being are our
							top priorities, and we strive to ensure that you receive the highest quality of
							care during this critical time.
						</p>
					</div>
				</div>
			</div>
			<div className="hero bg-base-100 my-20">
				<div className="hero-content flex-row">
					<div>
						<h1 className="text-3xl font-bold">VOLUNTEERS WANTED</h1>
						<p className="py-6">
							Help give back by volunteering at our facility in many ways, Such as hepling with
							Grocery shopping, clerical work. Students can also use our facility to volunteer
							and earn credits toward their education.
						</p>
						<Link
							href={'/contact-us'}
							className="btn btn-primary font-bold text-lg"
						>
							Volunteer Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
