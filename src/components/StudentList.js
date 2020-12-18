import React, {useState} from 'react';
import { useForm } from "react-hook-form";


function StudentList(props) {
    const [addItems, setItems] = useState("");

    const names = ['Tony Stark', 'Steve Rodgers', 'Bruce Banner']
    const nameList = names.map(name => (
        <li className="list-group-item">{name}</li>
    ));
    
    const { register,handleSubmit } = useForm();

    const onSubmit = (data) => {
       console.log(data);
    }
    
  
    return (
        <div>
        <ul className="list-group">
        {nameList}
        </ul>
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <textarea name="New Student" className="form-control mt-4" id="exampleFormControlTextarea1" ref={register}/>
        <input type="submit" name="Add" className="form-control mt-2" placeholder="Add a Student"/>
        </form>
        
       </div>
    );
}

export default StudentList;