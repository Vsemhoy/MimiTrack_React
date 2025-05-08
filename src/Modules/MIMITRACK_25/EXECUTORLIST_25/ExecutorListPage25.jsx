import React, { useContext } from "react";
import { StateContext, StateProvider } from "../../../Components/Definitions/Global/ComStateProvider25/ComStateProvider25";
import BreadCrumbBox from "../../../Components/MimiTemplate/components/BREADCRUMBS/BreadCrumbBox";

const ExecutorListPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div className={"mi-ska-mw-1400"}>
        <BreadCrumbBox></BreadCrumbBox>
            ExecutorListPage
        </div>
    )
};

export default ExecutorListPage;