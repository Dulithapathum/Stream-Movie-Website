import Banner from "./pages/Banner";
import { Header } from "./pages/Header";
import { TopMovies } from "./pages/TopMovies";

const App = () => (
  <div className="bg-[#2F2F2F]">
    <Header />
    <Banner />
    <TopMovies/>
  </div>
);

export default App;
