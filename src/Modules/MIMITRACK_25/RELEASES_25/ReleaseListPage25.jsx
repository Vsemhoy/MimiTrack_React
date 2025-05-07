import React from "react";
import { StateContext, StateProvider } from "../../../Components/Definitions/Global/ComStateProvider25/ComStateProvider25";

const ReleaseListPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div>
            ReleaseListPage
        </div>
    )
};

export default ReleaseListPage;