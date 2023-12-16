import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
    
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Samy Offer</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <div className='text-[#8892b0] py-4 max-w-[700px]'>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full satck developer in both front-end and back-end development. 
        I specialize in creating user-friendly interfaces and robust server-side solutions to build efficient and comprehensive software applications.</p>
        <p> Actually I'm a student at "Haute école léonard de Vinci - Paul Lambin", currently on Erasmus at "IUT Montpellier" for my third year, I'm planning to do my master's in Montreal. 
        </p>
        </div>
        

        {/* Button */}
        <div>
        <Link to='work' smooth={true} duration={500}>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>

    </div>
  )
}

export default Home