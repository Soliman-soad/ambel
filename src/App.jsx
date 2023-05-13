import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex w-[1440px]">
      <Sidebar />
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
