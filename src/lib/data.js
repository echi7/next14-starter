const users = [
    {id:1, name:'John'},
    {id:2, name:'Jane'},
]

const posts = [
    {id:1, title:"post 1", body:"...0..", userId: 1},
    {id:2, title:"post 2", body:"..1...", userId: 1},
    {id:3, title:"post 3", body:"...2..", userId: 2},
    {id:4, title:"post 4", body:"...3..", userId: 2},
]

export const getPosts = () => {
    return posts;
};

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    return post;
};

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
};
