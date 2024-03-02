import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function TaskFunctions(){
return <div id="task-functions">
            <div id="buttons">
                <button type="button">Done</button>
                <button type="button">Pending</button>
            </div>
            <div id="search-box">
                <input placeholder="Search items" type="text"/>
                <button id="search" type="button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
       </div>
}

export default TaskFunctions;