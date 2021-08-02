import { useSelector } from "react-redux";
import { dappletsActions } from "../../redux/actions";

import { SearchFields, Dapplets } from "..";

import "../../styles/components/main.scss";

const Main = () => {
    const dapplets = useSelector(({ dapplets }) => dapplets.dapplets);

    return <div className="main">
        <SearchFields dappletsActions={dappletsActions} />
        <Dapplets
            dapplets={dapplets}
            dappletsActions={dappletsActions}
        />
    </div>
}

export default Main;