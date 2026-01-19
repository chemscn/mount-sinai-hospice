"use client";

import React, { useState } from "react";
import { SuccessfulEmailSent } from "../components/SuccessfulEmailSent";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent!");
        setIsSending(false);
        setIsSuccessful(true);
        setForm({ name: "", phoneNumber: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
        setIsSending(false);
        setIsSuccessful(false);
      }
    } catch {
      setStatus("❌ Something went wrong.");
      setIsSending(false);
      setIsSuccessful(false);
    }
  };

  return isSuccessful ? (
    <SuccessfulEmailSent />
  ) : (
    <form onSubmit={handleSubmit}>
      <h1 className="mx-10 lg:mx-60 text-3xl font-bold my-8">Send Us a Message</h1>
      <div className="flex flex-col mx-10 lg:mx-60 items-center">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
            <span className="label-text-alt">Required*</span>
          </div>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            className="flex input input-bordered input-primary flex-row"
            required
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Phone Number</span>
            <span className="label-text-alt">Required*</span>
          </div>
          <input
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            type="tel"
            className="flex input input-bordered input-primary flex-row"
            required
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
            <span className="label-text-alt">Required*</span>
          </div>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            className="flex input input-bordered input-primary flex-row"
            required
          />
        </label>

        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Type your message to us here"
          className="textarea textarea-bordered textarea-primary textarea-lg w-full mt-5"
          required
          minLength={10}
          maxLength={1000}
        />

        <button
          disabled={isSending}
          type="submit"
          className="btn btn-primary my-4 max-w-[200px] text-lg font-bold"
        >
          {isSending ? "Please wait" : "Submit"}
        </button>

        {status && (
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
            <span className="font-medium">{status}</span>
          </div>
        )}
      </div>
    </form>
  );
}