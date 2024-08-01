
import { NavListitem } from "../components/NavListitem";
import { SearchBox } from "../components/SearchBox";
import NavListdata from "../data/NavListdata";

export const Header = () => {
  return (
    <div>
      <header className="w-[1400px] h-16 flex justify-between m-auto items-center">
        <a href="/" className="text-[#EAE6DE] font-bold text-4xl">Prime Movies</a>
        <ul className="flex gap-10 font-bold text-[#EAE6DE] text-xl">
          {NavListdata.map((nav) => (
            <NavListitem key={nav.id} nav={nav} />
          ))}
        </ul>
        <SearchBox/>
      </header>
    </div>
  );
}; 
