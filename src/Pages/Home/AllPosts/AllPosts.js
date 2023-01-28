import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Container from '../../../Components/Container/Container';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../AuthProvider/AuthProvider';

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
            {posts.map(post => <div key={post._id}>
                <div className=" w-full mb-2 bg-white rounded-xl">
          <div className="p-3">
            <div className="flex items-center gap-x-3">
            <div className="avatar ">
              <div className="w-9 h-9 rounded-full bg-gray-300 ">
                {
                    post?.avatar ? <img src={post?.avatar} alt="name" />
                    :
                    <span className="text-3xl">{post?.name[0]}</span>
                }
              </div>
            </div>
            <div>
                <p className='text-md'>{post.name}</p>
                <p className='text-sm'>12-01-2023</p>
            </div>
            </div>

            {/* main message or post  */}
            <div className='p-3'>
                <p>{post.message}</p>
            </div>
          </div>
        </div>
            </div>
            )}
        </div>
        </Container>
    );
};

export default AllPosts;