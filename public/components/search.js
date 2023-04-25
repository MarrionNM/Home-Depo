// import { RiSearch2Line } from 'react-icons/ri';

function Search() {
  return (
    <div className="px-[50px] py-4 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-2 lg:gap-x-3 relative lg:-top-4 lg:shadow-5 bg-white lg:bg-white lg:backdrop-blur rounded-lg shadow-2xl"> 
      <div>
        <h3>Property Type</h3>
        <select className="border-solid border-2 b-black p-2">
          <option>Any</option>          
          <option>Apartment</option>
          <option>Apartment / Flat</option>
          <option>Townhouse</option>
          <option>Vacant Land / Plot</option>
          <option>Farm</option>
          <option>Commercial Property</option>
          <option>Industrial Property</option>
        </select>
      </div>

      <div>
        <h3>Min Price</h3>
        <select className="border-solid border-2 b-black p-2">
          <option>Any</option>
          <option>R 100 000</option>
          <option>R 150 000</option>
          <option>R 200 000</option>
          <option>R 250 000</option>
          <option>R 300 000</option>
          <option>R 350 000</option>
          <option>R 400 000</option>
          <option>R 450 000</option>
          <option>R 500 000</option>
        </select>
      </div>

      <div>
        <h3>Max Price</h3>
        <select className="border-solid border-2 b-black p-2">
          <option>Any</option>
          <option>R 100 000</option>
          <option>R 150 000</option>
          <option>R 200 000</option>
          <option>R 250 000</option>
          <option>R 300 000</option>
          <option>R 350 000</option>
          <option>R 400 000</option>
          <option>R 450 000</option>
          <option>R 500 000</option>
        </select>
      </div>

      <div>
        <h3>Bedrooms</h3>
        <select className="border-solid border-2 b-black p-2">
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
          <option>5+</option>
        </select>
      </div>

      <button className="bg-primary hover:bg-secondary transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
        Search
        {/* <RiSearch2Line/> */}
      </button>
    </div>
  );
}

export default Search;
