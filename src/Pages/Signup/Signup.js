import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {
    const navigate = useNavigate()
    const {user, signupemail, updateprofile} = useContext(AuthContext);
    const [error, setError] = useState(false)

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signupemail(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                navigate('/')
                handleupdateProfile(name)
            }
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    const handleupdateProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateprofile(profile)
        .then(() => {})
        .catch(e => console.error(e))
    }

    return (
        <div>
            <div>
            <div className='my-2'>
           <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto">
	<h1 className="text-2xl font-bold text-center">Registration</h1>
	<form onSubmit={handleSignup} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="name" className="block text-gray-600">Name</label>
			<input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-emerald-600 bg-blue-100" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="email" className="block text-gray-600">email</label>
			<input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-emerald-600 bg-blue-100" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-emerald-600 bg-blue-100" />
		</div>

		{/* success massage  */}
		{/* {success && <p className='text-success'>Register successful</p> } */}
		<div className='text-error'>{error}</div>

		<button type='submit' className="block btn w-full p-3 text-center rounded-sm text-gray-50 bg-primary">Sign up</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex justify-center">
		<button aria-label="Log in with Google" className="rounded-xl btn btn-outline btn-error px-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
	</div>
	<p className="text-lg text-center text-gray-600">Already have an account?
		<Link rel="noopener noreferrer" className="underline text-gray-800" to="/login">Login</Link>
	</p>
</div>
        </div>
        </div>
        </div>
    );
};

export default Signup;