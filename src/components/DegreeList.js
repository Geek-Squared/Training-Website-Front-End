import React, {useState} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function DegreeName(props) {
return (
    <Button  id="toggler" style={{ marginBottom: '1rem', backgroundColor: 'white', color: 'black' }}>
      {props.degreeName}
    </Button>
)
}

function CourseList(props){
    return (
        <div>
            
            <ul className="list-group">
            <h3>Courses</h3> 
              <li className="list-group-item">{props.course1}</li>
              <li className="list-group-item">{props.course2}</li>
              <li className="list-group-item">{props.course3}</li>
              <li className="list-group-item">{props.course4}</li>
        </ul>
        </div>
    )
}

function DegreeList() {
    const [open, setOpen] = useState(false);

  return (
    <div>
    <DegreeName degreeName="BHSc(Honours) - Neuroscience"/>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
         <CourseList course1="Advanced Neuroanatomy" course2="Advanced Neurophysiology" course3="Applied Clinical Neuroscience" course4="Advanced Neuroanatomy"/>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  );
}

export default DegreeList;



