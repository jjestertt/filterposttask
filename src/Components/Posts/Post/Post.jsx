import React from "react";

const Post = (props) => {
    return (
            <div className="card">
                <div className="card-body ">
                    <h5 className="card-title text-primary">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <p className="card-text"><small className="text-muted">{props.userName}</small></p>
                </div>
            </div>
    );
}

export default Post;