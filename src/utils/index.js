import React from 'react';
import Profile from '../views/Profile';
import NOTIFICATION from '../views/Notification';
import REPORT from '../views/Report';

const USER_INFO_URL = 'https://my-json-server.typicode.com/kevindongzg/demo/login';

export const fetchUserInfo = async () => {
  return await fetch(USER_INFO_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(res => res.json());
};

export const modules = [
  { name: '个人信息', path: '/profile', permissionCode: 'PROFILE', component: <Profile /> },
  {
    name: '通知中心',
    path: '/notification',
    permissionCode: 'NOTIFICATION',
    component: <NOTIFICATION />
  },
  { name: '报表', path: '/report', permissionCode: 'REPORT', component: <REPORT /> }
];
