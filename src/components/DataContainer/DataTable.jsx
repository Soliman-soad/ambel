import { ReactComponent as Glass } from "../../assets/glass.svg";
import { ReactComponent as Bar } from "../../assets/bar.svg";
import TransactionItem from "../items/TransactionItem";

const DataTable = () => {
  const transactionData = [
    "User Name",
    "Name",
    "Subscription Value",
    "Transaction",
    "Contribution",
  ];
  const transactionInfo = [
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
    {
      userName: "Tazul96",
      name: "Md. Tazul Islam",
      subscription: 1000,
      transaction: 325,
      percentage: 25,
    },
  ];
  return (
    <div className="bg-white w-[1106px] mx-auto rounded-lg">
      {/* title  */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl mr-[14px]">Top</h1>

          <select
            name="org"
            className="w-[136px] h-8 bg-[#F0F3FC] rounded-lg text-xs text-[#5B5B5B] border-[#19525A80] border border-opacity-50"
          >
            <option
              value="organization"
              className="bg-[#F0F3FC] px-[10px] py-2"
            >
              Organization
            </option>
            <option
              value="organization1"
              className="bg-[#F0F3FC] px-[10px] py-2"
            >
              organization1
            </option>
            <option
              value="organization2"
              className="bg-[#F0F3FC] px-[10px] py-2"
            >
              organization2
            </option>
            <option
              value="organization3"
              className="bg-[#F0F3FC] px-[10px] py-2"
            >
              organization3
            </option>
          </select>
        </div>

        <div className="flex items-center">
          {/* search field */}
          <fieldset className="w-[358px] h-11 bg-white pl-[10px] pr-[13px] text-[#8D8D8D] rounded-3xl border border-[#19525A80]border-opacity-50 overflow-hidden">
            <div className="relative w-full h-full">
              <input
                type="search"
                name="search"
                placeholder="Search category name..."
                className=" py-[7px] text-base rounded-lg focus:outline-none bg-white text-gray-800 w-full h-full"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                <Glass className="w-22 h-22" />
              </span>
            </div>
          </fieldset>

          <Bar className="w-1 h-5 ml-[15px]" />
        </div>
      </div>




        {/* table data */}
      <table className="w-[1064px] mx-auto mt-3 text-base font-normal">
        <thead className="bg-[#E7F5FF] border-[0.5px] border-[#19525A80] border-opacity-50 rounded-lg h-[58px]">
          <tr className="text-center">
            {transactionData.map((item, i) => (
              <th key={i} className="p-3 font-normal">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactionInfo.map((item, i) => (
            <TransactionItem item={item} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
