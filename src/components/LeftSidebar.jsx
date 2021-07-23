import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import UserIcon from "../assets/images/user-icon.svg";

import "../styles/components/left-sidebar.scss";

const LeftSidebar = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return <div className="left-sidebar">
        <div className="left-sidebar__user-image">
            <img src={UserIcon} alt="user-icon" />
        </div>
        <div className="left-sidebar__menu-tabs">
            <Link to="/dapplets"
                onClick={() => setCurrentTab(0)}
            >
                <div className={classNames("tab-one", {
                    "tab-one--active": 0 === currentTab
                })}>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z" stroke="#0085FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.5 4.20996L12 6.80996L16.5 4.20996" stroke="#0085FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.5 19.79V14.6L3 12" stroke="#0085FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12L16.5 14.6V19.79" stroke="#0085FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" stroke="#0085FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22.08V12" stroke="#0085FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
            <Link to="/editors-choice"
                onClick={() => setCurrentTab(1)}
            >
                <div className={classNames("tab-two", {
                    "tab-two--active": 1 === currentTab
                })}>
                    <svg
                        width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8401 3.61012C20.3294 3.09912 19.7229 2.69376 19.0555 2.4172C18.388 2.14064 17.6726 1.99829 16.9501 1.99829C16.2276 1.99829 15.5122 2.14064 14.8448 2.4172C14.1773 2.69376 13.5709 3.09912 13.0601 3.61012L12.0001 4.67012L10.9401 3.61012C9.90843 2.57842 8.50915 1.99883 7.05012 1.99883C5.59109 1.99883 4.19181 2.57842 3.16012 3.61012C2.12843 4.64181 1.54883 6.04108 1.54883 7.50012C1.54883 8.95915 2.12843 10.3584 3.16012 11.3901L4.22012 12.4501L12.0001 20.2301L19.7801 12.4501L20.8401 11.3901C21.3511 10.8794 21.7565 10.2729 22.033 9.60547C22.3096 8.93801 22.4519 8.2226 22.4519 7.50012C22.4519 6.77763 22.3096 6.06222 22.033 5.39476C21.7565 4.7273 21.3511 4.12087 20.8401 3.61012V3.61012Z" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
            <Link to="/essential-dapplets"
                onClick={() => setCurrentTab(2)}
            >
                <div className={classNames("tab-three", {
                    "tab-three--active": 2 === currentTab
                })}>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3H3V10H10V3Z" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 3H14V10H21V3Z" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 14H14V21H21V14Z" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 14H3V21H10V14Z" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
            <Link to="/social-networks"
                onClick={() => setCurrentTab(3)}
            >
                <div className={classNames("tab-four", {
                    "tab-four--active": 3 === currentTab
                })}>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
            <Link to="/financial-dapplets"
                onClick={() => setCurrentTab(4)}
            >
                <div className={classNames("tab-five", {
                    "tab-five--active": 4 === currentTab
                })}>
                    <svg
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 6H23V12" stroke="#565555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </Link>
        </div>
    </div >
}


export default LeftSidebar;