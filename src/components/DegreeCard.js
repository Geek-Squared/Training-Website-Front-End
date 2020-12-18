import React from 'react';
import DegreeList from './DegreeList';

function DegreeCard(props) {
    return(
        <div className="container card mt-4" style={{width: '33rem'}}>
            <img src={props.img} className="card-img-top center" alt="Student images" style={{width: '70px', height:'70px', alignItems: 'center'}} />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <ul className="list-group">
                <li className="list-group-item"><DegreeList /></li>
            </ul>
            
            </div>
        </div>
    )
}

export default DegreeCard;
