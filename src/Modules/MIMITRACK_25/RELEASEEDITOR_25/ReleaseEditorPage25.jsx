import React, { useContext } from "react";
import { StateContext, StateProvider } from "../../../Components/Definitions/Global/ComStateProvider25/ComStateProvider25";

const ReleaseEditorPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div>
            ReleaseEditorPage
        </div>
    )
};

export default ReleaseEditorPage;