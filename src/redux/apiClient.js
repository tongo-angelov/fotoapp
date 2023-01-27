const API = 'https://jsonplaceholder.typicode.com';

export const FetchAPI = {
    getUsers: async () => {
        return await fetch(`${API}/users`).then(res => res.json());
    },

    getPosts: async () => {
        return await fetch(`${API}/posts`).then(res => res.json());
    },

    getAlbums: async () => {
        return await fetch(`${API}/albums`).then(res => res.json());
    }
};