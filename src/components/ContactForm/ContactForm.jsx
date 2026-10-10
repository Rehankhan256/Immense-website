import { useState } from "react";
import { Send } from "lucide-react";
import { courseOptions } from "./courseList";

const WHATSAPP_NUMBER = "919009990972"; // Replace with your WhatsApp number

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    batch: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
📚 *New Admission Enquiry*

👤 Name: ${form.name}

📞 Mobile: ${form.phone}

📧 Email: ${form.email || "Not Provided"}

🎓 Course: ${form.course}

🕒 Preferred Batch: ${form.batch || "Not Selected"}

📝 Message:
${form.message || "No message"}
`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");

    // Reset Form
    setForm({
      name: "",
      phone: "",
      email: "",
      course: "",
      batch: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left Side */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Admission Open
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Start Your
              <span className="block text-blue-600">
                Learning Journey
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Join our English Speaking and Computer Courses to develop
              practical skills, boost your confidence, and prepare for
              academic and career success.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <p className="text-slate-700">
                  Experienced & Friendly Trainers
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <p className="text-slate-700">
                  Practical & Interactive Classes
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                <p className="text-slate-700">
                  Affordable Fees & Flexible Batches
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900">
              Admission Enquiry
            </h3>

            <p className="mt-2 text-slate-600">
              Fill out the form below and we'll contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address (Optional)"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />

              <select
                name="course"
                required
                value={form.course}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">Select Course</option>

                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>

              <select
                name="batch"
                value={form.batch}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">Preferred Batch</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>

              <textarea
                rows="4"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
              >
                <Send size={20} />
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;