import {react} from 'react'
import Charity from '../SVG/charity'
import { Link } from 'react-router-dom'

const Home=()=> {
  return (
   
      <div className="mx-auto grid md:grid-cols-2 grid-cols-1 max-w-screen px-16 py-32 sm:py-48 lg:py-32">

        <div className='hidden md:block'><Charity/></div>
        
      <div>

        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Link to='/contact-us'>
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Reach out to us.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Proceed <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          </Link>
        </div>
        <div className="text-center">
        </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
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
            <Link to="/learn-more" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
              </div>
          </div>
        
      </div>
      
  )
}
export default Home