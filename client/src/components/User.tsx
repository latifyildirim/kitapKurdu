import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../redux/authSlice';

export default function User() {
  const dispatch = useDispatch<any>();

  const { username, isAdmin, email, createdAt } = useSelector(
    (state: any) => state.authSlice.user.user
  );

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card shadow-lg rounded-lg p-4">
        <div className="card-body">
          <div className="mb-2">
            <h5 className="font-weight-bold mb-0">Role:</h5>
            <p className="mb-0">{isAdmin ? 'Admin' : 'User'}</p>
          </div>
          <div className="mb-2">
            <h5 className="font-weight-bold mb-0">Username:</h5>
            <p className="mb-0">{username}</p>
          </div>
          <div className="mb-2">
            <h5 className="font-weight-bold mb-0">Email:</h5>
            <p className="mb-0">{email}</p>
          </div>
          <div className="mb-2">
            <h5 className="font-weight-bold mb-0">Date:</h5>
            <p className="mb-0">{new Date(createdAt).toISOString()}</p>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
