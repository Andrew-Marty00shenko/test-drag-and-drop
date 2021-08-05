import CloseSvg from "../assets/images/arrow-right.svg";

import "../styles/components/right-sidebar.scss";

const RightSidebar = () => {
    return <div className="right-sidebar">
        <div className="right-sidebar__close-img">
            <img src={CloseSvg} alt="close" />
        </div>
        <div className="right-sidebar__title">
            <p>DAPPLET SETTINGS</p>
        </div>
        <div className="right-sidebar__create-list">
            <p>
                Create new list
            </p>
            <div>
                <input type="text" placeholder="list name" />
                <button>create</button>
            </div>
        </div>
        <div className="right-sidebar__new-tag">
            <p>
                Create new tag
            </p>
            <div>
                <input type="text" placeholder="tag name" />
                <button>create</button>
            </div>
        </div>
        <div className="right-sidebar__my-tags">
            <p>MY TAGS</p>
            <div className="my-tags">
                <div className="my-tags__item">
                    <button>
                        Twitter
                    </button>
                </div>
                <div className="my-tags__item">
                    <button>
                        Social Media
                    </button>
                </div>
                <div className="my-tags__item">
                    <button>
                        Top 10
                    </button>
                </div>
                <div className="my-tags__item">
                    <button>
                        Finances
                    </button>
                </div>
            </div>
        </div>
        <div className="right-sidebar__community-tags">
            <p>COMMUNITY TAGS</p>
            <div className="community-tags">
                <div className="community-tags__item">
                    <button>
                        Social
                    </button>
                </div>
                <div className="community-tags__item">
                    <button>
                        Top 100
                    </button>
                </div>
                <div className="community-tags__item">
                    <button>
                        Testing
                    </button>
                </div>
                <div className="community-tags__item">
                    <button>
                        Favourites
                    </button>
                </div>
            </div>
        </div>
        <div className="right-sidebar__working">
            <h1 className="right-sidebar__working-header">WORKING ON</h1>
            <p>twitter.com</p>
            <p>twitter.com/randomusername</p>
            <p>facebook.com</p>
            <p>facebook.com/randomusername</p>
        </div>
    </div>
}

export default RightSidebar;