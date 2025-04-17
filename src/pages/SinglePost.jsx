import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const { id } = useParams();
    const urlApi = 'https://jsonplaceholder.typicode.com/posts';

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        console.log('Ho caricato la pagina')

        axios.get(`${urlApi}/${id}`)
            .then(res => setPostList(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <h1>{postList.title} - {id}</h1>
            <p>{postList.body}</p>
        </div>
    )

}

export default SinglePost;