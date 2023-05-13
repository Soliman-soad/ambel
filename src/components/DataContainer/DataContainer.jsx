import BarChartData from "./BarChartData";
import DataTable from "./DataTable";


const DataContainer = () => {
    return (
        <div className='bg-[#F5F5F5] h-full space-y-[27px]'>
            <DataTable/>
            <BarChartData/>
        </div>
    );
};

export default DataContainer;