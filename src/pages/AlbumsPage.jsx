import { useState, useEffect } from "react";
import AlbumCard from "../components/AlbumCard/AlbumCard";


export default function AlbumsPage() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
        setPosts(data.slice(0, 100));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="list">
            {posts?.map((post, key) => <AlbumCard key={key} title={post.title} thumbnailUrl={post.thumbnailUrl} />)}
        </div>
    );
}

