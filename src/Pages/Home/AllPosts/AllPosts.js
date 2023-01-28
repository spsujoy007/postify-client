import React, { useContext } from 'react';
import Container from '../../../Components/Container/Container';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AllPosts = () => {
    const {user} = useContext(AuthContext)

    const posts = [
        {
            name: "Sujoy Paul",
            date: '10/01/2023',
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa totam quisquam officiis eaque quas ea placeat omnis voluptate amet quidem."
        },
        {
            name: "Sujoy Paul",
            date: '10/01/2023',
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa totam quisquam officiis eaque quas ea placeat omnis voluptate amet quidem."
        },
        {
            name: "Sujoy Paul",
            date: '10/01/2023',
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa totam quisquam officiis eaque quas ea placeat omnis voluptate amet quidem."
        },
    ]

    return (
        <Container>
        <div className='mt-5 '>
            {posts.map(post => <div>
                <div className="card w-full mb-2 bg-gray-100">
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