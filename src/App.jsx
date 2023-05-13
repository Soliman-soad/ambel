import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex w-[1440px]">
      <Sidebar />
      <div>
        <Navbar />
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
