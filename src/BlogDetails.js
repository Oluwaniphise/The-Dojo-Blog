import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom'
const BlogDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const handleClick = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    {/* <p>Written by {blog.author} </p> */}
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
      );
}
 
export default BlogDetails;