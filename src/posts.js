import React from "react";
import Post from './post';

var posts = [
    {
        title: 'Blog post #1',
        content: 'My first blog post is all about my blog post and how to write a new post in my blog, you can find it here',
        published: '1 days a go',
        author: 'Israel',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #2',
        content: ' My second blog post is all about my blog post',
        published: '2 days a go',
        author: 'Joe',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #3',
        content: 'My third blog post  is all about my blog post',
        published: '3 days a go',
        author: 'Israel',
        image: 'https://via.placeholder.com/90'
    },
    ];
function Posts() {
    return posts.map(function(post) {
        return <Post
            title={post.title}
            content={post.content}
            image={post.image}
            published={post.published}
            author={post.author}
        />
    });

}
export default Posts;