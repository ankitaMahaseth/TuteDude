import { Link } from 'react-router-dom'

function Home() {

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description:
        'Build responsive, fast, and modern websites using the latest technologies.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Create beautiful and intuitive user experiences that your customers love.',
    },
    {
      icon: '🚀',
      title: 'Digital Growth',
      description:
        'Improve your online presence and help your business reach more people.',
    },
  ]

  return (
    <>

      <main>
        {/* Hero Section */}
        <section className="overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">

            <div>
              <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                Welcome to My World
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Build Your Ideas Into{' '}
                <span className="text-indigo-600">
                  Something Extraordinary.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                We help turn your vision into reality with modern digital
                solutions, creative design, and powerful web experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Explore Services →
                </Link>

                <Link
                  to="/about"
                  className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">Modern</p>
                  <p className="text-sm text-gray-500">Technology</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">Creative</p>
                  <p className="text-sm text-gray-500">Design</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">Responsive</p>
                  <p className="text-sm text-gray-500">Experiences</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-purple-200/60 blur-2xl" />
              <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-indigo-300/50 blur-2xl" />

              <div className="relative rounded-3xl border border-white bg-white/80 p-4 shadow-2xl shadow-indigo-100 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
                  alt="Developer working on a modern website"
                  className="h-72 w-full rounded-2xl object-cover sm:h-96"
                />

                <div className="p-5">
                  <p className="text-sm font-medium text-indigo-600">
                    Ideas into reality
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Your vision, our mission.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-semibold uppercase tracking-widest text-indigo-600">
                Our Services
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything You Need to Grow
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We combine technology and creativity to create digital
                experiences that make a difference.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:bg-indigo-100">
                    {service.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Home
