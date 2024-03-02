import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskAdiction(){
return <div id="task-adiction">
            <InputGroup className="mb-3">
                <Form.Control placeholder="Add new task" />
                <InputGroup.Text><button><FontAwesomeIcon icon={faCirclePlus} /></button></InputGroup.Text>
            </InputGroup>
       </div>
}

export default TaskAdiction;