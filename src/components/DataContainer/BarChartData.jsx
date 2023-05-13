import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: 'Jan',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,        
  },
  {
    name: 'Feb',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Mar',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000, 
  },
  {
    name: 'Apr',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Jun',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'July',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Aug',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Sep',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Oct',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Nov',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  },
  {
    name: 'Dec',
    stripe: 198000,
    fee: 30000,
    cancel: 20000,
    paypal:138000,
  }
];

const BarChartData = () => {
    return (
        <div className="w-[1106px] h-[486px] bg-white mx-auto  pt-[14px] ">

          <div className="flex items-center justify-between pb-4 border-b border-[#42424233]">
          {/* chart title*/}
          <div>
            <h1 className="font-medium text-xl pl-[14px] ">Gateway Performance</h1>
          </div>

          {/* count details */}
          <div className="text-sm flex space-x-[42px] font-normal pr-3">
            <h1 className="text-[#008545]">Total: $ 3.05M </h1>
            <h1 className="text-[#992D5A]">Fee: $ 90K </h1>
            <h1 className="text-[#FF0000]">Cancel: $ 50K </h1>
          </div>

          </div>



            <ResponsiveContainer width="100%" height="88%">
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} minTickGap={20} />
          <YAxis  tickCount={12}  tickFormatter={tick =>  new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(tick)
          }  domain={[0, dataMax => (dataMax * 1.3)]}/>
          <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
          <Legend iconType="circle" align="left" payload={[{value:"Stripe", color:"#0070E0"}, {value:"paypal", color:"#7A73FF"}]} margin={{ top: 0, left: 10, right: 0, bottom: 0 }}/>          
          <Bar barSize={20}  dataKey="paypal" stackId="a" fill="#7A73FF" />
          <Bar barSize={20}  dataKey="fee" stackId="a" fill="#992D5A" />
          <Bar barSize={20}  dataKey="cancel" stackId="a" fill="#FF0000" />
          <Bar barSize={20}  dataKey="stripe" stackId="b" fill="#0070E0" />                    
          <Bar barSize={20}  dataKey="fee" stackId="b" fill="#992D5A" />
          <Bar barSize={20}  dataKey="cancel" stackId="b" fill="#FF0000" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default BarChartData;