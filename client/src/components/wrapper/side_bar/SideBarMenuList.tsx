import { coin_page } from "../../../path/PagePath";

export const SideBarMenuList = [
    {
        title: "Home",
        icon: <i className="fas fa-home side-icon"/>,
        path: "/",
        className: "side",
        onClick: () => {}
    },
    {
        title: "Coin",
        icon: <i className="fas fa-coins"/>,
        path: coin_page,
        className: "side",
        onClick: () => {}
    },    
    {
        title: "Stock",
        icon: <i className="fas fa-chart-line side-icon"/>,
        path: "",
        className: "side",
        onClick: () => {alert("준비중입니다.");}
    }
]