import LogoutBtn from '../LogoutBtn/LogoutBtn';
import Searchbar from '../Searchbar/Searchbar';
import { ReactComponent as Logo } from '../../../LogoV2.svg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../Navbar.css';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);

  return (
    <nav className="navbar">
      <div style={{ display: 'flex' }}>
        <Logo className="logo"></Logo>
        <h1 className="mainTitle">Photospots</h1>
      </div>
      {user.email != '' ? (
        <>
          <Searchbar></Searchbar>
          <Dropdown></Dropdown>
        </>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
export default Navbar;
