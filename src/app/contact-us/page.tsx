import React from 'react';
import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
export const metadata: Metadata = {
	title: 'Contact Mount Sinai Hospice | 24/7 Hospice Support in Texas',
	description: 'Request hospice information or a consultation. Serving Harlingen, Victoria, and surrounding counties. Call Mount Sinai Hospice for 24/7 support.',
};

export default function ContactPage() {
	return <ContactForm />
}