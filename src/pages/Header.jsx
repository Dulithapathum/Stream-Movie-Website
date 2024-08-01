
import { NavListitem } from "../components/NavListitem";
import NavListdata from "../data/NavListdata";

export const Header = () => {
  return (
    <div>
      <header>
        <a href="/">Prime Movies</a>
        <ul>
          {NavListdata.map((nav) => (
            <NavListitem key={nav.id} nav={nav} />
          ))}
        </ul>
      </header>
    </div>
  );
};
