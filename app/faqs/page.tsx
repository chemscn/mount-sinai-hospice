import React from 'react';

const Faqs = () => {
	return (
		<div className="px-10 m-10">
			<h1 className='text-center text-2xl font-bold my-5'>Frequently Asked Questions</h1>
			<div className="collapse rounded-sm collapse-arrow bg-primary text-white my-2">
				<input
					type="radio"
					name="my-accordion-2"
					defaultChecked
				/>
				<div className="collapse-title text-xl font-medium">What is Hospice?</div>
				<div className="collapse-content bg-accent text-black">
					<p className='p-4'>
						Hospice care focuses on providing comfort and dignity while embracing life to its
						fullest, even in the face of advanced illness. With decades of combined experience,
						the Mount Sinai Hospice team delivers comprehensive home hospice services to manage
						symptoms effectively, enhance quality of life, and support both patients and their
						families.
					</p>
				</div>
			</div>
			<div className="collapse rounded-sm collapse-arrow bg-primary text-white my-2">
				<input
					type="radio"
					name="my-accordion-2"
				/>
				<div className="collapse-title text-xl font-medium bg-primary text-white">
					Who is Eligible for Hospice Care?
				</div>
				<div className="collapse-content bg-accent text-black">
					<p className='p-4'>
						{`Hospice care is available to individuals of any age and with various conditions. Mount Sinai Hospice supports patients with cancer, heart disease, end-stage lung, kidney, or liver disease, Alzheimer's, ALS, or any other life-limiting illness. Additionally, patients experiencing severe multi-symptom decline, including malnutrition, significant weight loss, inactivity, and mental impairment (referred to as "failure to thrive"), are also eligible. Referrals can be made by patients, family members, discharge planners, nurses, doctors, and others. Eligibility must be confirmed by the patient's doctor or a hospice physician.`}
					</p>
				</div>
			</div>
			<div className="collapse rounded-sm collapse-arrow bg-primary text-white my-2">
				<input
					type="radio"
					name="my-accordion-2"
				/>
				<div className="collapse-title text-xl font-medium">How Do I Pay My Bill?</div>
				<div className="collapse-content bg-accent text-black">
					<p className='p-4'>
						Mount Sinai Hospice accepts Medicare reimbursement as full payment. This reimbursement
						covers 100% of the clinical services provided, including medication, supplies, and
						equipment necessary for hospice care.
					</p>
				</div>
			</div>
			<div className="collapse rounded-sm collapse-arrow bg-primary text-white my-2">
				<input
					type="radio"
					name="my-accordion-2"
				/>
				<div className="collapse-title text-xl font-medium">
					In Which Areas of the Rio Grande Valley Do You Provide Services?
				</div>
				<div className="collapse-content bg-accent text-black">
					<p className='p-4'>We offer services throughout Cameron, Hidalgo, Willacy, and Starr Counties.</p>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
