import { useSelector } from "react-redux";
import CloudIcon from "../assets/images/cloud.svg";
import SettingsIcon from "../assets/images/settings.svg";

import "../styles/components/header.scss";

const Header = () => {
    const status = useSelector(({ dapplets }) => dapplets.error);

    return <div className="header">
        <div className="header__status">
            <div className="header__status-icon">
                <img src={CloudIcon} alt="cloud" />
            </div>
            <div className="header__status-text">
                Extension state:
                {status ?
                    <span className="header__status-text-err"> {status} </span>
                    :
                    <span className="header__status-text-active">Active</span>}
            </div>
        </div>
        <div className="header__settings">
            <div className="header__settings-icon">
                <img src={SettingsIcon} alt="settings" />
            </div>
            <div className="header__settings-text">
                Settings
            </div>
        </div>
    </div>
}

export default Header;