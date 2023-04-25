// import { RiSearch2Line } from 'react-icons/ri';
import {useContext} from 'react';
import House from "./house";
import { HouseContext } from "../contexts/HouseContext";
import Link from "next/link";

function HousList() {
  const { houses, loading } = useContext(HouseContext);

  if (houses.length < 1){
    return(
      <div className="text-center text-3xl text-primary mt-50">Nothing Found</div>
    )
  }

  return (
    <section className="mt-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link href={`/detail/${encodeURIComponent(house.id)}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HousList;
