import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div>
            <p className='text-4xl font-bold inline border-b-4'>
              Me
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Samy Offer, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a passionate young developer with a strong love for coding. 
                I enjoy crafting small applications in my spare time as well as contributing to large-scale projects. 
                My enthusiasm for coding drives me to explore and create innovative software solutions.
                In addition to my coding journey, I completed my secondary education at Athénée Ganenou. Subsequently, 
                I pursued a bachelor's degree in Computer Science at "Haute Ecole Leonard de Vinci - Paul Lambin." 
                <p>During my academic journey, I had the opportunity to broaden my horizons through an Erasmus exchange program 
                at the Institute of Technology in Montpellier, specializing in the deployment of communicative and secure 
                applications (DACS). </p> 
                This experience not only enhanced my technical skills but also provided me with a global 
                perspective on the field.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;