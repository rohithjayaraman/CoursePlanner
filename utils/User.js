import { useState } from 'react';

function getUser() {
  const [user, setUser] = useState({role: 'admin'});

  return {
    user,
    setUser
  }
}

function canEdit(user){
  return user && user.role === 'admin';
}

export {
  getUser,
  canEdit
};
