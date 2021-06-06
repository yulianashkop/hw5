import React from "react";
import Posts from './posts'
import Sidebar from "./sidebar";


function Main() {
    return (
        <section className="posts">
            <label className="title">This is my blog</label>
            <div className="posts-list">
                <Posts/>

            </div>
        </section>
    );
}

export default Main;