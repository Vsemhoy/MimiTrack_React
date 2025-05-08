import React, { useContext } from "react";
import { StateContext, StateProvider } from "../../../Components/Definitions/Global/ComStateProvider25/ComStateProvider25";
import BreadCrumbBox from "../../../Components/MimiTemplate/components/BREADCRUMBS/BreadCrumbBox";

const ReleaseEditorPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div>
        <BreadCrumbBox></BreadCrumbBox>
            ReleaseEditorPage
        </div>
    )
};

export default ReleaseEditorPage;