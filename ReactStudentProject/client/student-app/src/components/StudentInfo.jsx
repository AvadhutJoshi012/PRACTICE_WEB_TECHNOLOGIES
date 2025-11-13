import React, {useEffect, useState} from "react";
import axios from "axios";

function StudentInfo(){

    const [students, setStudents]=useState([]);
    const [formData, setFormData]=useState({id:"", name:"", age:""});
    const [editing, setEditing]=useState(false);

    const loadStudent=()=>{
        axios
            .get("http://localhost:5000/student")
            .then((res)=> setStudents(res.data))
            .catch((err)=> console.error(err));
    }

    useEffect(()=>{
        loadStudent();
    },[]);

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(editing){
            axios
                .put(`http://localhost:5000/student/${formData.id}`, formData)
                .then(()=>{
                    loadStudent();
                    setEditing(false);
                    setFormData({id:"",name:"",age:""});
                })
                .catch((err)=> console.log(err));
        }
        else{
            axios
                .post("http://localhost:5000/student",formData)
                .then(()=>{
                    loadStudent();
                    setFormData({id:"",name:"",age:""});
                })
                .catch((err)=> console.log(err));
        }
    }

    const handleEdit=(stu)=>{
        setEditing(true);
        setFormData(stu);
    }

    const handleDelete=(id)=>{
        axios
            .delete(`http://localhost:5000/student/${id}`)
            .then(()=> loadStudent())
            .catch((err)=>console.log(err));
    }

    return(
        <>
            <div className="container">
                <div className="fdiv">
                    <h2>Enter Student Information</h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />

                        <input type="number" name="age" placeholder="Enter Age" value={formData.age} onChange={handleChange} required />

                        <button type="submit" className={editing?"btn-update":"btn-add"}>
                            {editing?"Update":"Add"}
                        </button>
                    </form>
                </div>
                <div className="tdiv">
                    <h2>Student Information</h2>
                    <hr />
                    <table border="2px" cellPadding="10px" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((stu)=>(
                                <tr key={stu.id}>
                                    <td>{stu.id}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.age}</td>
                                    <td>
                                        <button className="btn-edit" onClick={()=>handleEdit(stu)}>Edit</button>
                                        <button className="btn-delete" onClick={()=>handleDelete(stu.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}

export default StudentInfo