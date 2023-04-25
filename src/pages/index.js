import Header from "../../public/components/header";
import HouseList from "../../public/components/houseList";
import Search from "../../public/components/search";
import HouseContextProvider from "../../public/contexts/HouseContext";

export default function Home() {
  return (
    <HouseContextProvider>
      <div className="max-w-[1440px] mx-auto bg-bckclr pb-[20px]">
        <div>
          <Header />
          <Search />
        </div>

        <div className="px-[100px]">
          <HouseList />
        </div>
      </div>
    </HouseContextProvider>
  );
}
