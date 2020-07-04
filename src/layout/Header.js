import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserInfo, setLoggedIn } from '../actions';
import { fetchUserInfo } from '../utils';
import history from '../history';
import './Header.scss';

const Header = ({ userInfo, loggedIn, onClickSignIn, onclickSignOut, history }) => {
  useEffect(() => {
    history.push('/');
  }, [loggedIn]);

  const renderSignedIn = () => (
    <>
      <img src={userInfo.avatar} alt="头像" />
      <span className="username">{userInfo.name}</span>
      <a className="sign" onClick={onclickSignOut}>
        Sign out
      </a>
    </>
  );

  const renderSignedOut = () => (
    <a className="sign" onClick={onClickSignIn}>
      Sign in
    </a>
  );

  return (
    <header className="header">
      <div className="header-wrapper">{loggedIn ? renderSignedIn() : renderSignedOut()}</div>
    </header>
  );
};

const mapStateToProps = ({ userInfo, loggedIn }) => ({
  userInfo,
  loggedIn,
  history
});

const mapDispatchToProps = dispatch => ({
  onClickSignIn: async () => {
    const userInfo = await fetchUserInfo();
    dispatch(setUserInfo(userInfo));
    dispatch(setLoggedIn(true));
  },
  onclickSignOut: () => {
    dispatch(setLoggedIn(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
