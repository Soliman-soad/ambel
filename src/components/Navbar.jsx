import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Dark } from "../assets/Dark.svg";
import { ReactComponent as Notification } from "../assets/Notification.svg";
import person from "../assets/person.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[1160px] h-20 px-16 py-5">

        {/* title section */}
      <div>
        <h1 className="text-lg text-[#424242] font-medium">Ambel Dashboard</h1>
      </div>

      <div className="flex items-center">
        {/* toggle button */}
        <label
          htmlFor="Toggle"
          className="inline-flex items-center p-1 text-[#424242] cursor-pointer bg-white rounded-full border"
        >
          <input id="Toggle" type="checkbox" className="hidden peer" />
          <span className="px-4 py-2  peer-checked:bg-white peer-checked:text-white rounded-3xl">
            <Dark className="w-[22px] h-[22px]" />
          </span>
          <span className="px-3 py-2 bg-[#19525A] peer-checked:bg-white peer-checked:text-white rounded-3xl">
            <Sun className="w-[22px] h-[22px]" />
          </span>
        </label>

        {/* notification icon */}
        <Notification className="inline w-[26px] h-[26px] mr-[26px] ml-[29px]" />

        {/* user image */}
        <img
          src={person}
          className="inline w-16 h-16 rounded-full object-fill"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
