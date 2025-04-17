import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PostList() {

    const urlApi = 'https://jsonplaceholder.typicode.com/posts';
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        console.log('Ho caricato la pagina')

        axios.get(urlApi)
            .then(res => setPostList(res.data))
            .catch(err => console.log(err))

    }, [])

    return (<>
        <h2>Lista dei posts</h2>
        <ul>
            {postList.map(post => <li key={post.id}>
                <h3>{post.title}</h3>
                <Link to={`/post-list/${post.id}`}>Più info...</Link>
            </li>
            )}
        </ul>
    </>)
}

export default PostList;