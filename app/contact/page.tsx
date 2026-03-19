"use client";

import { useRef, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

      <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition duration-200">
        <form
          ref={formRef}
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            setLoading(true);

            try {
              const res = await fetch(
                "https://4r46h5qsm9.execute-api.us-east-1.amazonaws.com/contact",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                }
              );

              if (!res.ok) throw new Error("Failed");

              setSent(true);
              formRef.current?.reset();
            } catch (err) {
              alert("Something went wrong. Please try again.");
            }

            setLoading(false);
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
            disabled={loading}
            className="bg-blue-400 text-white py-3 rounded hover:bg-blue-500 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && (
            <p className="text-green-600 text-center mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}