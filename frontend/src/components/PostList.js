import React, { useState } from "react";
import moment from "moment";

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
            {posts.map((p) => (
                <div>
                    {p.title}<br />
                    {p.description}<br />
                    {moment(p.createdAt).fromNow()}
                </div>
            ))}
        </div>
    );
}

export default PostList;