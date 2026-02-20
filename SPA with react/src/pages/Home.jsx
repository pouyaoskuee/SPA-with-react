import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <h1>
                this is home page
            </h1>

            <Link to={'/posts'}> go to posts page </Link>
        </div>
    );
}

export default Home;