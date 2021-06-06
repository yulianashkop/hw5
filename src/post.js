import React from "react";

function Post(props) {
    return (
        <div className="post">
            <label className="post-title">
                {props.title}
            </label>
            <p className="post-content">
                {props.content}
            </p>

            <img  width="90" height="90" className="post-image" src={props.image}/>
            <label className="post-footer">
                Published {props.published} by {props.author}
            </label>
        </div>
    );
}

export default Post;