import Banner from "./pages/Banner";
import { Header } from "./pages/Header";
import { NowPlaingMovies } from "./pages/NowPlaingMovies";
import { TopMovies } from "./pages/TopMovies";

const App = () => (
  <div className="bg-[#2F2F2F]">
    <Header />
    <Banner />
    <TopMovies/>
    <NowPlaingMovies/>
  </div>
);

export default App;
