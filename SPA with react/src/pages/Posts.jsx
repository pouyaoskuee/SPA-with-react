import React from 'react';
import {Link} from "react-router-dom";

function Posts(props) {
    return (
        <div>
            this is posts page
            <nav>
                <ul>
                    <li><Link to={'1'}>firs post</Link></li>
                    <li><Link to={'2'}>second post</Link></li>
                    <li><Link to={'3'}>theed post</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Posts;