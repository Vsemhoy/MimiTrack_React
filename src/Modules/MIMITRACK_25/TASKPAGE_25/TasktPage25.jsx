import React from "react";
import { StateContext, StateProvider } from "../../../Components/Definitions/Global/ComStateProvider25/ComStateProvider25";

const TaskPage = (props) => {
    const {state, setState} = useContext(StateContext);
    const {userData} = props;


    
    return (
        <div className={"mi-ska-mw-1400"}>
            <BreadCrumbBox></BreadCrumbBox>
            TaskPage
        </div>
    )
};

export default TaskPage;