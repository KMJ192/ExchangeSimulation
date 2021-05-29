import { coin_exchange, coin_page } from "../../../path/PagePath";

export const SideBarMenuList = [
    {
        title: "Home",
        icon: <i className="fas fa-home side-icon"></i>,
        path: "/",
        className: "side"
    },
    {
        title: "Coin",
        icon: <i className="fab fa-bitcoin side-icon"></i>,
        path: coin_page,
        className: "side"
    },    
    {
        title: "Chart",
        icon: <i className="fas fa-chart-line side-icon"></i>,
        path: coin_exchange,
        className: "side"
    }
]