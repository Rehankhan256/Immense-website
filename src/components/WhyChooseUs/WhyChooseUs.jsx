
import { motion } from "framer-motion";
import {
  MessageCircle,
  Clock,
  Users,
  Mic,
  HeartHandshake,
  Wallet,
  BriefcaseBusiness,
  Trophy,
  GraduationCap,
  Sparkles,
  CalendarCheck,
  Target,
  Phone,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Practical English Speaking",
    description: "Learn real-life English without relying on bookish language.",
  },
  {
    icon: Clock,
    title: "Speak in 15–30 Days",
    description: "Build speaking confidence through regular practice and guidance.",
  },
  {
    icon: Users,
    title: "Daily Conversation Practice",
    description: "Practice everyday conversations and improve your fluency.",
  },
  {
    icon: Sparkles,
    title: "Personality Development",
    description: "Improve communication, confidence, and your overall personality.",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Develop stage confidence and overcome hesitation.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Learning Environment",
    description: "Learn comfortably with supportive trainers and fellow students.",
  },
  {
    icon: GraduationCap,
    title: "Personal Attention",
    description: "Get additional guidance according to your learning needs.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    description: "Learn valuable communication skills with an affordable fee structure.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Interview Preparation",
    description: "Prepare for interviews and improve your career opportunities.",
  },
  {
    icon: Target,
    title: "Smart Skills Training",
    description: "Combine English communication with practical skills.",
  },
  {
    icon: Trophy,
    title: "Activities & Competitions",
    description: "Participate in engaging activities that build confidence.",
  },
  {
    icon: CheckCircle2,
    title: "Real-Life Learning",
    description: "Focus on practical communication skills for everyday situations.",
  },
];

const highlights = [
  {
    icon: CalendarCheck,
    title: "3 Days Demo Classes",
    description: "Experience our teaching approach before committing to a course.",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction-Based Training",
    description: "A learning experience designed around student satisfaction.",
  },
  {
    icon: BookOpen,
    title: "3-Month Training Module",
    description: "A structured 90-day training program.",
  },
  {
    icon: MessageCircle,
    title: "7-Day Speaking Challenge",
    description: "Start practicing spoken English from day one.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ✨ Why Join Us?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Learn English.
            <span className="block text-blue-600">
              Transform Your Personality.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Immense Education Hub, we don't just teach English.
            We help you build confidence, develop your personality,
            and improve real-life communication skills through
            practical, result-oriented training.
          </p>

          <p className="mt-4 font-semibold text-slate-700">
            Speak Better • Grow Faster • Achieve More
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Special Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              🔥 Our Special Highlights
            </span>

            <h2 className="mt-6 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Your Journey to
              <span className="text-blue-600"> Confident English</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Get started with guided practice, structured training,
              and opportunities to speak with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-12 text-center text-white shadow-xl sm:px-12"
        >
          <Sparkles className="mx-auto mb-5 text-yellow-300" size={36} />

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Don't Just Learn English...
            <span className="mt-2 block text-blue-100">
              Transform Your Personality!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            English is more than a language. It's a gateway to
            confidence, success, and global opportunities.
          </p>

          <p className="mt-5 text-lg font-bold">
            💎 Join Today & Speak with Confidence Tomorrow!
          </p>

          <a
            href="tel:9009990972"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            <Phone size={20} />
            Call Now: 9009990972
          </a>

          <p className="mt-5 text-sm text-blue-100">
            IMMENSE EDUCATION HUB — Where Learning Meets Confidence & Success
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;