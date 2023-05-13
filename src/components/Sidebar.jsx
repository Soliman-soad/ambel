import logo from "../assets/ambel_logo.png";
import home from "../assets/Home.svg";
import analysis from "../assets/Analysis.svg";
import users from "../assets/Customer.svg";
import message from "../assets/Message.svg";
import email from "../assets/Email.svg";
import transaction from "../assets/Transaction.svg";
import sales from "../assets/Sales.svg";
import withdraw from "../assets/bank.svg";
import staff from "../assets/staff.svg";
import shop from "../assets/Shop.svg";
import idVerification from "../assets/Home.svg";
import community from "../assets/Community.svg";
import support from "../assets/Support.svg";
import report from "../assets/Report.svg";
import settings from "../assets/settings.svg";
import SideItem from "./items/Sideitem";


const Sidebar = () => {
    
    const sideBarData =[
        {
            icon:home,
            itemName:"Home",
            active:false
        },
        {
            icon:analysis,
            itemName:"Analysis",
            active:true
        },
        {
            icon:users,
            itemName:"Users",
            active:false
        },
        {
            icon:message,
            itemName:"Message",
            active:false
        },
        {
            icon:email,
            itemName:"Email",
            active:false
        },
        {
            icon:transaction,
            itemName:"Transaction",
            active:false
        },
        {
            icon:sales,
            itemName:"Sales",
            active:false
        },
        {
            icon:withdraw,
            itemName:"Withdraw",
            active:false
        },
        {
            icon:staff,
            itemName:"Staff",
            active:false
        },
        {
            icon:shop,
            itemName:"Shop",
            active:false
        },
        {
            icon:idVerification,
            itemName:"ID Verification",
            active:false
        },
        {
            icon:community,
            itemName:"Community",
            active:false
        },
        {
            icon:support,
            itemName:"Support",
            active:false
        },
        {
            icon:report,
            itemName:"Report",
            active:false
        },
        {
            icon:settings,
            itemName:"Settings",
            active:false
        }
    ]

    return (
    <div className="h-full py-5 w-[280px] bg-[#DFE9DD] text-gray-800">


        {/* this is the logo section */}
      <div className="border-b-[0.5px] border-[#5B5B5B] px-[15px] pb-3">
        <img
          src={logo}
          alt="logo"
          className="w-[190px] h-10 mx-auto object-fill"
        />        
      </div>

        {/* this is menu section */}
      <div className="pt-5 px-[15px]">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          {
            sideBarData.map((item,i)=><SideItem key={i} itemData={item}/>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
