import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			{/* HERO */}
			<section className="hero bg-accent min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<Image
						width={797}
						height={720}
						src="/hero-1.png"
						alt="Caregiver supporting a patient at home"
						className="fl-row fl-row-full-width fl-row-bg-photo fl-node-qi4ua1zv79fk fl-row-default-height fl-row-align-center"
					/>
					<div>
						{/* ✅ ONE H1 on the page */}
						<h1 className="text-5xl font-bold">
							Hospice Care in Texas
							<span className="text-primary"> (Harlingen & Victoria)</span>
						</h1>

						<p className="py-6">
							25 years of ensuring patients in Texas receive the highest standard of comfort and
							respect.
						</p>

						{/* Keyword-rich local signal in first section */}
						<p className="text-sm opacity-80 -mt-3">
							Serving patients and families across South Texas, including Cameron, Hidalgo, Willacy,
							and Starr Counties. Medicare-certified and CHAP-certified hospice services.
						</p>

						<div className="mt-6">
							<Link href="/contact-us" className="btn btn-primary font-bold text-lg">
								Book a Consultation
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="text-center my-4">
				{/* ✅ H2 for a major section */}
				<h2 className="text-3xl font-bold">Why Choose Mount Sinai Hospice?</h2>
				<p className="text-md my-1 text-primary">We are looking for volunteers to join our team.</p>
			</section>

			<section className="flex flex-row flex-wrap gap-4 justify-center my-2">
				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<Image
							width={300}
							height={200}
							src="/flag.png"
							alt="Texas flag"
							style={{ minHeight: 200, height: 200 }}
						/>
					</figure>
					<div className="card-body">
						{/* ✅ H3: subtopic under H2 section */}
						<h3 className="card-title">Locally & Veteran Owned</h3>
						<p>
							Proudly locally and veteran-owned, Mount Sinai Hospice brings a personal touch and
							dedication to quality care.
						</p>
					</div>
				</div>

				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<Image
							width={200}
							height={200}
							alt="Texas outline"
							src="/texas.png"
							style={{ height: 200, minHeight: 200 }}
						/>
					</figure>
					<div className="card-body">
						<h3 className="card-title">Service Area Across South Texas</h3>
						<p>
							We provide compassionate hospice care in Harlingen, Victoria, and surrounding areas —
							including Cameron, Hidalgo, Willacy, and Starr Counties.
						</p>
					</div>
				</div>

				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<Image
							src="/certified.png"
							style={{ height: 200, minHeight: 200 }}
							width={200}
							height={200}
							alt="Certification badge"
						/>
					</figure>
					<div className="card-body">
						<h3 className="card-title">Medicare-Certified & CHAP-Certified</h3>
						<p>
							As a Medicare-certified and CHAP-certified provider, we adhere to the highest
							standards of hospice care and patient support.
						</p>
					</div>
				</div>

				<div className="card border-2 bg-accent w-96 shadow-xl">
					<figure className="bg-white">
						<Image
							src="/coverage.png"
							style={{ height: 200, minHeight: 200 }}
							width={300}
							height={200}
							alt="Coverage and benefits illustration"
						/>
					</figure>
					<div className="card-body">
						<h3 className="card-title">Comprehensive Coverage</h3>
						<p>
							We accept Medicare reimbursement, helping cover clinical services, medications, and
							necessary supplies related to hospice care.
						</p>
					</div>
				</div>
			</section>

			{/* TRUST / ABOUT */}
			<section className="hero bg-base-100 mt-20">
				<div className="hero-content lg:flex-row flex-col">
					<Image height={550} width={550} alt="Hospice care team supporting a family" src="/trusted-1.png" />
					<div>
						{/* ✅ H2 for major section */}
						<h2 className="text-3xl font-bold">
							Trusted & Reliable Hospice Care in <span className="text-primary">Texas</span>
						</h2>
						<p className="py-6">
							At Mount Sinai Hospice, we are committed to compassionate, reliable hospice care for
							patients and families. We provide <strong>home hospice care</strong>, symptom management,
							and family support — focusing on comfort, dignity, and guidance every step of the way.
						</p>
					</div>
				</div>
			</section>

			{/* VOLUNTEERS */}
			<section className="hero bg-base-100 my-20">
				<div className="hero-content flex-row">
					<div>
						{/* ✅ H2 for major section */}
						<h2 className="text-3xl font-bold">Volunteer With Mount Sinai Hospice</h2>
						<p className="py-6">
							Help give back by volunteering in meaningful ways — grocery shopping, clerical work,
							and family support. Students can also earn credits toward their education.
						</p>
						<Link href="/contact-us" className="btn btn-primary font-bold text-lg">
							Volunteer Now
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
