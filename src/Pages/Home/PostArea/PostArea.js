import React, { useContext, useState } from "react";
import Container from "../../../Components/Container/Container";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineSend } from "react-icons/ai";

const PostArea = () => {
    const {user} = useContext(AuthContext)
    const [modal, setModal] = useState(false);


  return (
    <Container>
      <div>
        <div className="card w-ful bg-base-100 bg-gray-100">
          <div className="card-body">
            <div className="flex items-start gap-x-3">
            <div className="avatar ">
              <div className="w-10 h-10 rounded-full bg-gray-300 ring ring-gray-400">
                {
                    user?.photoURL ? <img src={user?.photoURL} alt="name" />
                    :
                    <span className="text-3xl">{user?.displayName[0]}</span>
                }
              </div>
            </div>
            <>
            {
                modal ?
                <div className="w-full">
                <textarea onFocus={() => setModal(true)} onBlur={() => setModal(false)} type="text" placeholder="what's on your mind?" className="rounded-xl input input-bordered w-full h-[100px] block" />
                <div className="flex justify-end mt-2">
                    <button className="btn btn-ghost text-2xl text-gray-800"><AiOutlineSend></AiOutlineSend></button>
                </div>
                </div>
                :
                <input onFocus={() => setModal(true)} onBlur={() => setModal(false)} type="text" placeholder="what's on your mind?" className="rounded-full input input-bordered w-full h-10" />
            }

            </>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostArea;
