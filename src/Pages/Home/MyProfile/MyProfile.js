import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
          <div className="avatar-group -space-x-4 mt-3 ">
            <div className="avatar">
              <div className="w-9">
                <img src="https://media.istockphoto.com/id/1136395700/vector/user-avatar-icon-button-profile-symbol-flat-person-icon-for-stock.jpg?s=612x612&w=0&k=20&c=H4t3BFYOIikZ8TKCvFp-z8Y7lFU_EWFKtywWaFzCpbE=" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-9">
                <img src="https://media.istockphoto.com/id/1136395700/vector/user-avatar-icon-button-profile-symbol-flat-person-icon-for-stock.jpg?s=612x612&w=0&k=20&c=H4t3BFYOIikZ8TKCvFp-z8Y7lFU_EWFKtywWaFzCpbE=" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-9">
                <img src="https://media.istockphoto.com/id/1136395700/vector/user-avatar-icon-button-profile-symbol-flat-person-icon-for-stock.jpg?s=612x612&w=0&k=20&c=H4t3BFYOIikZ8TKCvFp-z8Y7lFU_EWFKtywWaFzCpbE=" alt="" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-9 bg-neutral-focus text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default MyProfile;
