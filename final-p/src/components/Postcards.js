import React from "react";

import { Link, useHistory } from "react-router-dom";

function Postcards({ post }) {
    const history = useHistory();

    return (
        <div>
            <Link to={`/post/${post.id}/`}>
                <span>{post.id}</span>
                <p>
                    <img src={post.image} />
                </p>
                <span>{post.name}</span>
            </Link>
        </div>
    );
}

export default Postcards;
