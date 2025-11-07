import React, {useState, useEffect} from "react"
import axios from "axios"

function BookList(){

    const [books, setBooks]=useState([]);
    const [formData, setFormData]=useState({id:"", title:"", author:"", publication_year:"", genre:""});
    const [editing, setEditing]=useState(false);

    const loadBooks=()=>{ //DISPLAY INFO
        axios
            .get("http://localhost:5000/books")
            .then((res)=>setBooks(res.data))
            .catch((err)=>console.error("Error To Fetching Data.",err));
    };

    useEffect(()=>{
        loadBooks();
    },[]);

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(editing){
            axios
                .put(`http://localhost:5000/books/${formData.id}`,formData)
                .then(()=>{
                    loadBooks();
                    setEditing(false);
                    setFormData({id:"", title:"", author:"", publication_year:"", genre:""})
                })
                .catch((err)=>console.log(err));
        }else{
            axios
                .post("http://localhost:5000/books",formData)
                .then(()=>{
                    loadBooks();
                    setFormData({id:"", title:"", author:"", publication_year:"", genre:""})
                })
                .catch((err)=> console.log(err));
        }
    }

    const handleEdit=(b)=>{
        setEditing(true);
        setFormData(b);
    }

    const handleDelete=(id)=>{
        axios
            .delete(`http://localhost:5000/books/${id}`)
            .then(()=> loadBooks())
            .catch((err)=>console.log(err));
    }

    return(
        <>
        <div className="container">
            <div className="form">
                <h2>Insert Book Details</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Enter Title" value={formData.title} onChange={handleChange} />

                    <input type="text" name="author" placeholder="Enter Author" value={formData.author} onChange={handleChange} />

                    <input type="number" name="publication_year" placeholder="Enter Publication Year" value={formData.publication_year} onChange={handleChange} />

                    <input type="text" name="genre" placeholder="Enter Genre" value={formData.genre} onChange={handleChange} />

                    <button type="submit">
                        {editing?"Update":"Add"}
                    </button>
                </form>
            </div>
            <div className="table">
                <h2>List Of Books</h2>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publication Year</th>
                            <th>Genre</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((b)=>(
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.publication_year}</td>
                                <td>{b.genre}</td>
                                <td>
                                    <button  onClick={()=>handleEdit(b)}>Edit</button>
                                    <button  onClick={()=>handleDelete(b.id)}>Delete</button>
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

export default BookList