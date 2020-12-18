import React from 'react';
import StudentList from './StudentList';

function StudentCard(props) {
    return(
        <div className="container card" style={{width: '33rem', display: 'inline-block'}}>
            <img src={props.img} className="card-img-top center" alt="Student images" style={{width: '70px', height:'70px', alignItems: 'center'}} />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <StudentList  btn="Add"/>
            
            </div>
        </div>
    )
}

export default StudentCard;
