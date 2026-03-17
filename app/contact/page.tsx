"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

      <form
        className="flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);

          const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          };

          await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
          });

          setSent(true);
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>

        {sent && (
          <p className="text-green-600 text-center mt-2">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}