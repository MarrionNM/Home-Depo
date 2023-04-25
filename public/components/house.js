import { BiBed, BiBath, BiArea } from 'react-icons/bi';

function House({ house }) {
  const { image, type, Region, address, bedrooms, bathrooms, surface, price } = house;

  return (
    <div className="bg-overlay shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[350px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-4 rounded-tl-[80px]" src={image}/>

      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green rounded-full text-white px-3">{type}</div>
        <div className="bg-violet rounded-full text-white px-3">{Region}</div>
      </div>

      <div className="text-lg font-semibold max-w-[260px]">{bedrooms} bedroom {type} in {Region}</div>

      <div className="flex gap-x-4 my-4 ">
        <div className="flex items-center text-grey gap-1"><div><BiBed/></div>{bedrooms}</div>
        <div className="flex items-center text-grey gap-1"><div><BiBath/></div>{bathrooms}</div>
        <div className="flex items-center text-grey gap-1"><div><BiArea/></div>{surface}</div>
      </div>

      <div className="text-lg font-semibold text-secondary md-4">R {price}</div>
    </div>
  );
}

export default House;
