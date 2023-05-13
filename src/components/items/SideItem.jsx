import arrow from "../../assets/arrow.svg";


const SideItem = ({ itemData }) => {
  return (
    <li
      className={`py-4 px-6 flex justify-between items-center ${
        itemData?.active ? "text-white bg-[#19525A]" : "text-[#424242]"
      }`}
    >

        {/* item name and log */}
      <div className="flex items-center">
        <img src={itemData?.icon} alt="" className="inline mr-4 h-7 w-7" />
        <h1 className="text-lg">{itemData?.itemName}</h1>
      </div>

      {/* if our route is active then arrow will show */}
      {itemData?.active && (
        <img src={arrow} alt="arrow" className="inline w-3 h-3" />
      )}
    </li>
  );
};

export default SideItem;
