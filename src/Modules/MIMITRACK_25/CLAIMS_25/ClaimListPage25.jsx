import React from "react";
import { StateContext, StateProvider } from "../../../Components/Definitions/Global/ComStateProvider25/ComStateProvider25";
import { useContext } from "react";
import BreadCrumbBox from "../../../Components/MimiTemplate/components/BREADCRUMBS/BreadCrumbBox";
import MenuBox from "../../../Components/MimiTemplate/components/MENUBOX/MenuBox";

const ClaimListPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div>
        <div className={"mi-ska-mw-1400"}>
        djfaklsdjklf
            <MenuBox />
            <br/>
            <BreadCrumbBox></BreadCrumbBox>
            ClaimListPage
        </div>
        </div>
    )
};

export default ClaimListPage;