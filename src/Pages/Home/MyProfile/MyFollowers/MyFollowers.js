import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyFollowers = () => {

    const {user} = useContext(AuthContext)

    const {data: followers = [], refetch, isLoading} = useQuery({
        queryKey: 'followers',
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/myfollowers?email=${user?.email}`);
            const data = await res.json()
            return data
        }
    })

    refetch()

    return (
        <div className='md:max-w-[500px] mx-auto'>
            {
                followers.map(follower => <div
                    key={follower._id}
                >
                    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{follower?.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default MyFollowers;