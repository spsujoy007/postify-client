import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = ({post}) => {
    const {name, avatar, message, email} = post;
    return (
        <div>
            <div className=" w-full mb-2 bg-white rounded-xl">
          <div className="p-3">
            <div className="flex items-center gap-x-3">
            <Link to={`/profile/${email}`}>
            <div className="avatar">
              <div className="w-9 h-9 rounded-full bg-gray-300 ">
                {
                    post?.avatar ? <img src={avatar} alt="name" />
                    :
                    <span className="text-3xl">{name[0]}</span>
                }
              </div>
            </div>
            </Link>
            <div>
                <p className='text-md'>{name}</p>
                <p className='text-sm'>12-01-2023</p>
            </div>
            </div>

            {/* main message or post  */}
            <div className='p-3'>
                <p>{message}</p>
            </div>
          </div>
        </div>
            </div>
    );
};

export default PostDetail;