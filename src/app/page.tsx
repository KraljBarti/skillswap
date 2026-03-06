import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 text-center bg-white border-b border-gray-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Master new skills by <span className="text-blue-600">swapping</span>{" "}
          yours.
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          SkillSwap is a peer-to-peer community where knowledge is the currency.
          Teach guitar, learn coding. Teach French, learn photography.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/discover"
            className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Start Learning
          </Link>
          <Link
            href="/how-it-works"
            className="px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            How it Works
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl w-full py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold text-gray-900">Equal Exchange</h3>
            <p className="text-gray-600">
              Our credit system ensures fair trades. Earn credits by teaching
              and spend them to learn from experts.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🌍
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Global Community
            </h3>
            <p className="text-gray-600">
              Connect with passionate learners and teachers from all over the
              world, right from your living room.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-gray-900">Verified Skills</h3>
            <p className="text-gray-600">
              Read reviews and view portfolios to find the perfect mentor for
              your specific learning goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-600 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready to share your expertise?
        </h2>
        <p className="mt-4 text-blue-100 text-lg">
          Join 5,000+ users already swapping skills today.
        </p>
        <Link
          href="/profile"
          className="mt-8 inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Create Your Profile
        </Link>
      </section>
    </div>
  );
}
