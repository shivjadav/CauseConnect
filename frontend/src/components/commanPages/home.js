import { Link } from 'react-router-dom';
import Charity from '../SVG/charity';
const Home = () => {
  const activities = [
    {
      title: 'Help to Orphanage',
      description:
        'Providing support, education, and love to children who have lost their parents. Through your help, we create a better future for these children, offering them the warmth of a family and a chance at education.',
    },
    {
      title: 'Help to Old Age Home',
      description:
        'Ensuring the elderly live in comfort and dignity by providing medical care, companionship, and community. Your support offers them a chance to live their golden years with peace and respect.',
    },
    {
      title: 'Tree Plantation',
      description:
        'Join our mission to combat climate change through extensive tree plantation drives. Each tree planted helps in creating a sustainable environment, preserving biodiversity, and promoting healthier communities.',
    },
    {
      title: 'River Cleaning',
      description:
        'Our rivers are vital for life. We engage in river clean-up drives to reduce pollution, maintain water quality, and protect aquatic ecosystems for a healthier, more sustainable future.',
    },
  ];

  return (
    <div>

    <div className="mx-auto grid md:grid-cols-2 grid-cols-1 max-w-screen px-16 py-20 sm:py-48 lg:py-20">
    <div className='hidden md:block'>
      <Charity />
    </div>

    <div>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <Link to='/contact-us'>
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Reach out to us.{' '}
              <span aria-hidden="true" className="absolute inset-0" />
              Proceed <span aria-hidden="true">&rarr;</span>
            
          </div>
        </Link>
      </div>
      <div className="text-center"></div>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl ">
        Donate to Causes That Matter
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Empower change by donating to the causes you care about within your city.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/donate"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Donate now
        </Link>
        <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
    <div id='learn-more' className="mx-auto max-w-screen-lg px-6 py-16">
      {/* Section Label */}
     
      <div className="mb-4">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-2 rounded-full shadow">
          About Our Initiatives
        </span>
      </div>

      {/* Header Section */}
      <div className="text-center mb-8" >
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          Making a Difference with <span className="text-indigo-600">Your Support</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          Empowering communities and transforming lives through our dedicated causes. Join us in making the world a better place.
        </p>
      </div>

      <hr className="border-gray-300 my-10" />

      {/* Activities Section */}
      <div className="space-y-16">
        {activities.map((activity, index) => (
          <div key={index} data-aos="fade-right" className=" max-w-3xl mx-auto">
            {/* Activity Title */}
            <div className="flex items-center">
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 tracking-wide mb-3">
                  {activity.title}
                </h3>
              </div>
            </div>
            {/* Activity Description */}
            <div className='border-l-4 border-dotted border-indigo-400'>
              
            <p className="text-lg  font-light text-gray-600 leading-7 max-w-2xl mx-auto">
              {activity.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default Home;
