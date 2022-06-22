import Home from "./pages/Home";
import Pages from "./pages/Pages";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
  return (
    <>
      <div className="container font-poppins">
        <div className="flex gap-2 my-4 items-center ">
          <GiForkKnifeSpoon size={24} />
          <h1 className="">BestRecipes</h1>
        </div>
        <Pages />
      </div>
    </>
  );
}

export default App;
