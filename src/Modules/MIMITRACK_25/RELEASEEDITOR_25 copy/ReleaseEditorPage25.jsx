import React from "react";
import { StateContext, StateProvider } from "../../../Components/ComStateProvider25/ComStateProvider25";

const ReleasePage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div>
            ReleasePage
        </div>
    )
};

export default ReleasePage;