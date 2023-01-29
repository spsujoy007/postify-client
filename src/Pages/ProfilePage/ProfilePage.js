import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaUserCheck, FaUserPlus } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import PostDetail from '../Home/PostDetail/PostDetail';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const ProfilePage = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    const visitorprofile = useLoaderData();
    const {email, name, avatar} = visitorprofile;


    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mypost?email=${email}`);
            const data = await res.json();
            return data;
        }
    })

    const {data: follow = []} = useQuery({
        queryKey: ['follow'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/isfollower?email=${email}`);
            const data = await res.json();
            return data;
        }
    })

    const {data: myfollowers = []} = useQuery({
        queryKey: ['myfollowers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myfollowers?email=${email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log("Following", myfollowers, email)

    if(user?.email === email){
        return navigate('/myprofile')
    }

    refetch();

    
    const handleFollow = () => {
    const followDetail = {
        myemail: user.email,
        email: email,
        avatar: user.photoURL,
        name: user.displayName
    }
        fetch(`http://localhost:5000/follow`, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(followDetail)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Followed')
            refetch()
        })
    }

    return (
        <div className="md:lg:max-w-[600px] mx-auto min-h-screen mt-5">
      <div className="bg-white flex items-start gap-x-4 p-10 rounded-xl shadow-lg">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={avatar} alt={name?.slice(0, 10)} />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>{email}</p>
          {
            myfollowers.length ?
            <div className="avatar-group -space-x-4 mt-3 ">
            {
                myfollowers.map(followers => <div 
                key={followers._id} 
                className="avatar">

                <div className="w-9">
                  <img src={followers.avatar} alt="" />
                </div>
                {/* <h1 className='text-sm py-2'>{followers.length} followers</h1> */}
              </div>)
            }
            {/* <div className="avatar placeholder">
              <div className="w-9 bg-neutral-focus text-neutral-content">
                <span>+99</span>
              </div>
            </div> */}
          </div>
          :
            <h1 className='text-sm py-2'>0 followers</h1>
          }
        <div className='mt-3'>
            {
                follow?.email ?
                <button className='flex items-center gap-2 p-3 hover:bg-sky-100 hover:text-sky-500 rounded-xl'><FaUserCheck></FaUserCheck> Following</button>
                :
                <button onClick={handleFollow} className='flex items-center gap-2 p-3 hover:bg-sky-100 hover:text-sky-500 rounded-xl'><FaUserPlus></FaUserPlus> Follow</button>
            }
        </div>
        </div>


      </div>

        
        <div className='mt-10'>
        {
            posts.map(post => <PostDetail
                key={post._id}
                post={post}
            ></PostDetail>)
        }
        </div>
      
    </div>
    );
};

export default ProfilePage;