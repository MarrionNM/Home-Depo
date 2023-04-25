import { useRouter } from "next/router";
import { Housedata } from "../api/houseData";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Link from "next/link";

function Detail() {
  // get house id
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const house = Housedata.find((house) => {
    return house.id === parseInt(id);
  });
  // const { house, loading } = useContext(HouseContext);

  return (
    <section className="p-x-150">
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              {house.bedrooms} bedroom {house.type} in {house.Region}
            </h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>

          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-secondary text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-primary text-white px-3 rounded-full">
              {house.Region}
            </div>
          </div>

          <div className="text-3xl font-semibold text-primary">
            R {house.price}
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[780px]">
            <div className="mb-8">
              <img src={house.image} />
            </div>

            <div className="flex gap-x-6 mb-6">
              <div className="flex gap-x-2 items-center">
                <div className="text-2xl">
                  <BiBed />
                </div>
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-2xl">
                  <BiBath />
                </div>
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-2xl">
                  <BiArea />
                </div>
                <div>{house.surface}</div>
              </div>
            </div>

            <div>{house.description}</div>
          </div>

          <div className="flex-1 bg-primary w-full mb-8 border border-overlay rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-violet rounded-full">
                <img src={house.image} />
              </div>

              <div>
                <div clasName="font-bold text-lg">House agent Name</div>

                <Link href="#" className="text-black text-sm">
                  View listings
                </Link>
              </div>
            </div>

            <form className="flex flex-col gap-y-4">
              <input className="border border-black focus:border-violet outline-none rounded w-full p-4 h-14 text-sm" type='text' placeholder="Name*"/>
              <input className="border border-black focus:border-violet outline-none rounded w-full p-4 h-14 text-sm" type='text' placeholder="Email*"/>
              <input className="border border-black focus:border-violet outline-none rounded w-full p-4 h-14 text-sm" type='text' placeholder="Cell*"/>
              <textarea className="border border-black focus:border-black outline-none resize-none rounded w-full p-4 h-36 text-sm text-black" placeholder="Message*" defaultValue="Hello, I am interasted in this property"></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet hover:bg-secondary text-white rounded p-4 text-sm w-full transition">Send message</button>
                <button className="border border-violet text-violet hover:border-overlay hover:text-overlay rounded p-4 text-sm w-full transition">Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
