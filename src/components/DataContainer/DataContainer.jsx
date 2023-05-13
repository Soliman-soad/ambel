import Chart from "react-google-charts";
import BarChartData from "./BarChartData";
import DataTable from "./DataTable";
import { ReactComponent as World } from "../../assets/world.svg";

const DataContainer = () => {
    return (
        <div className='bg-[#F5F5F5] h-full space-y-[27px] pt-[27px] '>
            <DataTable/>
            <BarChartData/>

            {/* map section */}
            <div className="pb-36">
                <h1 className="text-2xl ml-[30px]">World Dominance</h1>
                <World className="mx-auto mt-8 w-[1100px] h-[709px]"/>
            </div>
        </div>
    );
};

export default DataContainer;