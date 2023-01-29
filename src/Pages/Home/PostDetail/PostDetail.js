import React from 'react';

const PostDetail = ({post}) => {
    const {name, avatar, message} = post 
    return (
        <div>
                <div className=" w-full mb-2 bg-white rounded-xl">
          <div className="p-3">
            <div className="flex items-center gap-x-3">
            <div className="avatar ">
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