import React from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../utils';
import { connect } from 'react-redux';
import './Menu.scss';

const Menu = ({ loggedIn, permissions }) => {
  const renderModulesByPermission = permissions =>
    modules.map(({ permissionCode, name, path }) =>
      permissions.includes(permissionCode) ? (
        <li className="nav-item" key={name}>
          <Link to={path}>{name}</Link>
        </li>
      ) : null
    );

  const renderModules = (loggedIn, permissions) =>
    loggedIn ? renderModulesByPermission(permissions) : null;

  return (
    <nav className="menu">
      <ul>
        <li className="nav-item">
          <Link to="/">首页</Link>
        </li>
        {renderModules(loggedIn, permissions)}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ userInfo: { permissions }, loggedIn }) => ({
  loggedIn,
  permissions
});

export default connect(mapStateToProps)(Menu);
