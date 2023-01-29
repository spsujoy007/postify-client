import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Container from '../../../Components/Container/Container';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PostDetail from '../PostDetail/PostDetail';

const AllPosts = () => {
    const {user} = useContext(AuthContext)

    // const [posts, setPosts] = useState([]);
    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`https://postify-server.vercel.app/allposts`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    refetch()

    return (
        <Container>
        <div className='mt-5 pb-20'>
            <p className='text-xs p-2 capitalize'>All posts</p>
            {posts.map(post => <PostDetail
                key={post._id}
                post={post}
            ></PostDetail>
            )}
        </div>
        </Container>
    );
};

export default AllPosts;