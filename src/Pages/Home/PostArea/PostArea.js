import React, { useContext, useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineSend } from "react-icons/ai";
import { toast } from "react-hot-toast";

const PostArea = () => {
    const {user} = useContext(AuthContext)
    const [modal, setModal] = useState(false);
    
    const handlePost = (event) => {
        event.preventDefault()
        const form = event.target;
        const message = form.message.value;
        console.log(message);
        let date = new Date()
        const postbody = {
            message,
            date,
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL
        }
        console.log(postbody)

        fetch(`https://postify-server.vercel.app/newpost`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(postbody)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Post successful')
                setModal(false)
                form.reset()
            }
        })
    }

  return (
    <Container>
      <form onSubmit={handlePost} className="mt-7">
        <div className="card w-ful bg-white">
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
                <textarea name="message" onFocus={() => setModal(true)} type="text" placeholder="what's on your mind?" className="rounded-xl input input-bordered w-full h-[100px] block" />
                <div className="flex justify-end mt-2">
                    <button type="submit" className="btn btn-ghost text-2xl text-gray-800"><AiOutlineSend></AiOutlineSend></button>
                </div>
                </div>
                :
                <input onFocus={() => setModal(true)} onBlur={() => setModal(false)} type="text" placeholder="what's on your mind?" className="rounded-full input input-bordered w-full h-10" />
            }

            </>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PostArea;
