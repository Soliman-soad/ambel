import { ReactComponent as Down } from "../assets/VectorDown.svg";
import { ReactComponent as Calender } from "../assets/calender.svg";
import { ReactComponent as Glass } from "../assets/glass.svg";

const SearchBar = () => {
  return (
    <div className="bg-[#E7F5FF] h-[54px] flex items-center space-x-[20px] px-[10px] border-y-[0.5px] border-[#19525A80]">

    {/* search field */}
    <fieldset className="w-[296px] h-8 bg-white pl-[10px] pr-[13px] text-[#5B5B5BB2] rounded-3xl border border-[#19525A80] border-opacity-50 overflow-hidden">
        <div className="relative">
          <input
            type="search"
            name="search"
            placeholder="search"
            className=" py-[7px] text-xs rounded-lg focus:outline-none bg-white text-gray-800 w-full"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <Glass className="h-[10px] w-[10px]"/>
          </span>
        </div>
      </fieldset>


        {/* Date field */}
      <fieldset className="w-[136px] h-8 bg-white pl-[10px] pr-[13px] text-[#5B5B5BB2] rounded-lg border border-[#19525A80] border-opacity-50 overflow-hidden">
        <div className="relative">
          <input
            type="search"
            name="date"
            placeholder="Date"
            className="py-[7px]  text-xs rounded-lg focus:outline-none bg-white text-gray-800 w-full"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <Calender className="h-[10px] w-[10px]" />
          </span>
        </div>
      </fieldset>

        

        {/* country field */}
      <fieldset className="w-[136px] h-8 bg-white pl-[10px] pr-[13px] text-[#5B5B5BB2] rounded-lg border border-[#19525A80] border-opacity-50 overflow-hidden">
        <div className="relative">
          <input
            type="search"
            name="country"
            placeholder="Country"
            className="py-[7px]  text-xs rounded-lg focus:outline-none bg-white text-gray-800 w-full"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <Down className="h-[10px] w-[10px]" />
          </span>
        </div>
      </fieldset>


        {/* State field */}
      <fieldset className="w-[136px] h-8 bg-white pl-[10px] pr-[13px] text-[#5B5B5BB2] rounded-lg border border-[#19525A80] border-opacity-50 overflow-hidden">
        <div className="relative">
          <input
            type="search"
            name="state"
            placeholder="State"
            className="py-[7px]  text-xs rounded-lg focus:outline-none bg-white text-gray-800 w-full"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <Down className="h-[10px] w-[10px]" />
          </span>
        </div>
      </fieldset>


        {/* city field */}
      <fieldset className="w-[136px] h-8 bg-white pl-[10px] pr-[13px] text-[#5B5B5BB2] rounded-lg border border-[#19525A80] border-opacity-50 overflow-hidden">
        <div className="relative">
          <input
            type="search"
            name="city"
            placeholder="City"
            className="py-[7px]  text-xs rounded-lg focus:outline-none bg-white text-gray-800 w-full"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <Down className="h-[10px] w-[10px]" />
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchBar;
