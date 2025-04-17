import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const { id } = useParams();
    const urlApi = 'https://jsonplaceholder.typicode.com/posts';

    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Ho caricato la pagina')
        setLoading(true);

        axios.get(`${urlApi}/${id}`)
            .then(res => {
                setTimeout(() => {
                    setPostList(res.data);
                    setLoading(false);
                }, 300);
            })
            .catch(err => { console.error(err) })

    }, [])

    //creo una variabile dove vado a salvare useNavigate
    const navigate = useNavigate();

    //essendo l'id una stringa, per poter navigare tra un post e l'altro devo convertirlo in num
    const idParsed = parseInt(id);

    //creo una funzione per andare al post precedente
    function PrevPost() {

        //creo una variabile per sottrarre 1 all'id del post
        const prevId = idParsed - 1;

        //faccio un'istruzione condizionale per bloccare il movimento a ritroso e non cadere id non presenti
        if (prevId >= 1) {
            navigate(`/post-list/${prevId}`)
        }

    }

    //creo una funzione per avanzare tra i post
    function NextPost() {
        //creo una variabile per aggiungere 1 all'id del post e quindi avanzare
        const prevId = idParsed + 1;

        //faccio un'istruzione condizionale per bloccare l'avanzamento tra i post e non cadere id non presenti (arrivano fino a 100 in questo caso)
        if (prevId <= 100) {
            navigate(`/post-list/${prevId}`)
        }
    }

    if (loading) {
        return <p>Caricamento in corso...</p>
    }

    return (
        <div>
            <h1>{postList.title} - {id}</h1>
            <p>{postList.body}</p>
            <button onClick={PrevPost} disabled={id <= 1}>Post precedente</button>
            <button onClick={NextPost} disabled={id >= 100}>Post successivo</button>
            <Link to='/post-list'>Torna alla lista</Link>
        </div>
    )

}

export default SinglePost;