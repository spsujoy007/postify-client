import React, { useContext, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyPostDetails = ({post}) => {
    const {user} = useContext(AuthContext)
    const {name, avatar, message, email} = post;

    const [edittext, setEdittext] = useState(false);
    // const 

    return (
        <div>
            <div className=" w-full mb-2 bg-white rounded-xl shadow-md">
          <div className="p-3">

            {/* for flex edit button and picture  */}
            <div className='flex justify-between'>
            <div className="flex items-center gap-x-3">
            <div className="avatar">
              <div className="w-9 h-9 rounded-full bg-gray-300 ">
                {
                    post?.avatar ? <img src={avatar} alt="name" />
                    :
                    <span className="text-3xl">{name[0]}</span>
                }
              </div>
            </div>
            <div>
                <p className='text-md'>{name}</p>
                <p className='text-sm'>12-01-2023</p>
            </div>
            </div>

            <div>
                {/* The button to open modal */}
{
    user?.email === email && <>
    <label htmlFor="my-modal-3" className="text-xl hover:text-sky-500 hover:cursor-pointer"><FaEdit></FaEdit></label>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
    </>
}

            </div>

            </div>

            {/* main message or post  */}
            <div className='p-3'>
                <p>{message}</p>
            </div>
        {/* delete button  */}
        <div className='flex justify-end'>
            <button>delete</button>
        </div>
          </div>


        </div>
            </div>
    );
};

export default MyPostDetails;