import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import DataContainer from "./components/DataContainer/DataContainer";

function App() {
  return (
    <div className="flex w-[1440px] text-[#191919] mx-auto overflow-hidden border-black border">
      <div>
      <Sidebar />
      </div>
      <div>
        <Navbar />
        <SearchBar/>
        <DataContainer/>
      </div>
    </div>
  );
}

export default App;
