import React from 'react';
import {Link, useParams} from "react-router-dom";

const Posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'First Post',
    },    {
        id: 2,
        title: 'second Post',
        content: 'second Post',
    },    {
        id: 3,
        title: 'theerd Post',
        content: 'theerd Post',
    }
]

const Post = () => {
    const {id} =useParams()
    console.log(id)
    const result = Posts.find(post => post.id === Number(id))
    return (
        <div>
            it is {result.title} and {result.content} whit {result.id} id
            <Link to={'/posts'}>go back</Link>
        </div>
    );
};

export default Post;