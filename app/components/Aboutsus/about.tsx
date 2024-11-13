
import Image from 'next/image';
import hero from '@/app/public/bghero3.png';

const Aboutus = () => {
  return (
    <div className="px-4 md:px-16 py-8">
    
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-8 sm:mt-12 md:mt-28">
        Boost Your <br />
        <span className="text-orange-500 -mb-12">Website</span> SEO
      </h1>

    
      <p className="mt-4 sm:mt-6 md:mt-8 font-mono text-base sm:text-lg md:text-sm -mb-12 text-gray-700">
        is simply dummy text of the printing and typesetting industry. Lorem <br />
        has been the industry s standard dummy text ever since the 1500s when <br />
        specimen book. It has survived not only five centuries.
      </p>

      <div className="relative mt-8 md:mt-12 lg:mt-16 flex justify-center lg:justify-end">
  <Image
    className="w-full sm:w-80 md:w-[350px] lg:w-[450px] xl:w-[500px] max-w-xs lg:max-w-none -mt-48 md:-mt-60 lg:-mt-72 xl:-mt-96"
    src={hero}
    alt="Hero Image"
    width={500}
    height={500}
    layout="intrinsic"
  />
</div>

    </div>
  );
};

export default Aboutus;