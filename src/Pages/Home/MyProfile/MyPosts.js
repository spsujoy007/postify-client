import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyPostDetails from './MyPostDetails';

const MyPosts = () => {

    const {user} = useContext(AuthContext)

    // const [posts, setPosts] = useState([]);
    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mypost?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    refetch()

    return (
        <div>
            <div className='mt-5 pb-20'>
            <p className='text-xs p-2 capitalize'>My posts</p>
            {
                posts.length > 0 ? <>
                {posts.map(post => <MyPostDetails                
                    key={post._id}
                    post={post}
                ></MyPostDetails>
            )}
                </>
                :
                <div className=" w-full mb-2 bg-white rounded-xl">
                <div className="py-6 px-3">
                  <h1 className='text-md font-bold text-center'>No post found</h1>
                </div>
              </div>
            }
        </div>
        </div>
    );
};

export default MyPosts;