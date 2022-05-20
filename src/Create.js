import { useState } from "react";
import {useHistory} from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [author, setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();


        const blog = {title, body};
        setisPending(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setisPending(false);
            // history.go(-1);
            history.push('/')
        })

    }
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title: </label>
                <input type="text" value={title} 
                onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="">Body: </label>
                <textarea  value={body} onChange={(e) => setBody(e.target.value)}
                required></textarea>
{/* 
                <label htmlFor="">Blog author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select> */}
                { !isPending && <button>Add Blog</button> }
                {isPending && <button disabled>Adding Blog...</button>}

             
            </form>
        </div>

    );
}
 
export default Create;