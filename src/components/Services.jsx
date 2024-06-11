import CardWithLink from "./CardWithLink";

const Services = () => {
  return (
    <>
      <div className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="text-center mb-12 text-[#37517e] font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            SERVICES
          </h2>
          <p className="mt-5 text-center text-base font-semibold leading-7 text-[#44a3d5] mb-11 text-primary-500">
            Explore the plethora of IT services offered by Evolvedev. Curious
            about our offerings? Take a look below.
          </p>
          <section className=" flex flex-wrap mt-5 mx-auto">
            <CardWithLink />
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
