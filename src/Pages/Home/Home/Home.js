import React from 'react';
import AllPosts from '../AllPosts/AllPosts';
import PostArea from '../PostArea/PostArea';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <PostArea></PostArea>
            <AllPosts></AllPosts>
        </div>
    );
};

export default Home;