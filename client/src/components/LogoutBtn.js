import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { logout } from '../app/features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAllFromPinnedList } from '../app/features/pinnedList/pinnedListSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = async () => {
    await signOut(auth);
    dispatch(logout());
    dispatch(removeAllFromPinnedList());
    navigate('/');
  };
  return (
    <>
      <button onClick={logoutUser}>Log Out</button>
    </>
  );
}

export default LogoutBtn;
