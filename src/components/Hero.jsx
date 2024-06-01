import React from 'react'

const Hero = () => {
  return (
    <div className='bg-sky-700 h-full flex justify-between center'>
        <div>
            <div>
                <h1>
                Turning 💡 Ideas Into Reality
                </h1>
            </div>
            <div>
                <h2>
                We offer modern solutions for growing your business.
                </h2>
            </div>
            <div>
            <a
                href="#"
                className="py-2 px-3 rounded-md bg-sky-300"
              >
                Get Started
              </a>
            </div>
        </div>
        <div>
            <div>
                <img className='h-30 w20' src="https://evolvedev-testing.netlify.app/assets/img/hero-img.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Hero