const Hero = () => {
  return (
    <div className="w-full bg-[#eeeeee] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Image Section */}
        <div className="mt-10">
          <img
            className="w-[500px] mx-auto mt-12"
            src={
              "https://evolvedev-testing.netlify.app/assets/img/hero-img.png"
            }
            alt="/"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[#37517e] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Evolve Dev
          </h1>
          <h1 className="text-[#44a3d5] text-2xl font-bold ">
            Turning 💡 Ideas Into Reality
          </h1>

          <p>We offer modern solutions for growing your business.</p>
          <button className="bg-[#37517e] text-white hover:text-[#37517e] hover:bg-[#44a3d5] duration-75 w-[200px] rounded-3xl font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
