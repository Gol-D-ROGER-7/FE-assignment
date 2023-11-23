import { GoBell } from "react-icons/go";
import { TbClockHour9 } from "react-icons/tb"; 
import { LuCalendarCheck } from "react-icons/lu"; 
import { GoEye } from "react-icons/go"; 
import { GoPeople } from "react-icons/go"; 
import { VscGraph } from "react-icons/vsc";

export const SidebarData = [
    {
        id: 1,
        title: "Notifications",
        icon: <GoBell size={30} />,
        link: "/notifications",
    },
    {
        id: 2,
        title: "Watch Time",
        icon:  <TbClockHour9  size={30}/>,
        link: "/watch-time",
    },
    {
        id: 3,
        title: "Schedule",
        icon: <LuCalendarCheck size={30}/>,
        link: "/schedule",
    },
    {
        id: 4,
        title: "eye",
        icon: <GoEye size={30} />,
        link: "/eye",
    },
    {
        id: 5,
        title: "People",
        icon: <GoPeople size={30}/>,
        link: "/people",
    },
    {
        id: 6,
        title: "Analytics",
        icon: <VscGraph size={30}/>,
        link: "/analytics",
    }
]

