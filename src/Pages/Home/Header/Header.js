import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext)

    const handlelogout = () => {
       logout()
       .then(() => {})
       .catch(e => console.log(e))
    }

    const menuitem = <>
        <li><Link to='/'><a>Home</a></Link></li>
        {
          !user?.uid &&
          <><li><Link to='/signup'><a>Signup</a></Link></li>
          <li><Link to='/login'><a>Login</a></Link></li></>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="uppercase menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuitem}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Postify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 uppercase">
      {menuitem}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?.uid && <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full ring ring-gray-800">
        {user?.photoURL ? <img alt={user?.displayName} src={user.photoURL} />
        :
        <span className="text-3xl">{user?.displayName[0]}</span>
        }
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <Link to='/myprofile'><a className="justify-between">
          Profile
        </a></Link>
      </li>
      <li><button onClick={handlelogout} className=''>Logout</button></li>
    </ul>
  </div>
  }
  </div>
</div>
        </div>
    );
};

export default Header;