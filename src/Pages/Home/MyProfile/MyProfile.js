import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyPosts from "./MyPosts";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myprofile = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myprofile?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const {data: myfollowers = []} = useQuery({
    queryKey: ['myfollowers'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/myfollowers?email=${user?.email}`);
        const data = await res.json();
        return data;
    }
})

refetch();

  if (isLoading) {
    return <Loader></Loader>;
  }
  const { avatar, name } = myprofile;
  refetch();

  return (
    <div className="md:lg:max-w-[600px] mx-auto min-h-screen mt-5">
      <div className="md:flex items-start gap-x-4 bg-white p-10 rounded-xl shadow-lg">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={avatar} alt={name?.slice(0, 10)} />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>{user?.email}</p>
            <h1 className="mt-3">my followers</h1>
          {
            myfollowers.length ?
            <div className="avatar-group -space-x-4 ">
            {
                myfollowers.map(followers => <div 
                key={followers._id} 
                className="avatar">

                <div className="w-9">
                  <img src={followers.avatar ? followers.avatar : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" />
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

          {/* my followers and following  */}
          <div className="flex gap-2 mt-2">
            <Link to='/followers'>
                <button className='flex items-center gap-2 p-3 hover:text-sky-500 rounded-xl'>Followers</button>
            </Link>
            <button className='flex items-center gap-2 p-3 hover:text-sky-500 rounded-xl'>Following</button>
          </div>
        </div>

      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default MyProfile;
