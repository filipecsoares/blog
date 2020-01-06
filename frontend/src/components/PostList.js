import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import './PostList.css';

const PostList = () => {

    const posts = [
                    {
                        id: 1, 
                        title: 'The first one', 
                        description: 'Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.', 
                        createdAt: new Date(),
                    },
                    {
                        id: 2, 
                        title: 'Another one', 
                        description: 'Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.', 
                        createdAt: new Date(),
                    },
                    {
                        id: 3, 
                        title: 'Everything becomes a little different as soon as it is spoken out loud', 
                        description: 'Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.', 
                        createdAt: new Date(),
                    },
                    {
                        id: 4, 
                        title: 'The first one', 
                        description: 'Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.', 
                        createdAt: new Date(),
                    },
                    {
                        id: 5, 
                        title: 'The first one', 
                        description: 'Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository.', 
                        createdAt: new Date(),
                    }
                ]

    return (
        <div>
            {posts.map((p, i) => (
                <div key={i} className={"PostList"}>
                    <h2>{p.title}</h2>
                    {p.description}<br />
                    <div className="CreatedAt">{moment(p.createdAt).fromNow()}</div>
                </div>
            ))}
        </div>
    );
    
}

export default PostList;