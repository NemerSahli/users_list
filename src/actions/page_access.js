import axios from 'axios';

export const logIn = (loginUser, routeTo) => async dispatch => {
  try {
    const result = await axios('http://localhost:8000/login', {
      method: 'post',
      data: loginUser,
      withCredentials: true
    });
    console.log(result);
    if (result.data.error === 0) {
      dispatch({ type: 'LOGIN' });
      routeTo.push('/users');
    } else {
    }
    dispatch({ type: 'LOGIN_FAILD', error: result.data.error });
  } catch (e) {
    alert('error:' + e);
  }
};

export const logOut = () => async dispatch => {
  try {
    const res = await axios('http://localhost:8000/logout', {
      method: 'post',
      withCredentials: true
    });

    console.log(res);
    if (res.data.error === 0) {
      // alert('no error');
      dispatch({ type: 'LOGOUT' });
    }
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (signUpUser, routeTo) => async dispatch => {
  alert(
    'signUp actions' + JSON.stringify(signUpUser) + JSON.stringify(routeTo)
  );
  try {
    const result = await axios('http://localhost:8000/signup', {
      method: 'post',
      data: signUpUser,
      withCredentials: true
    });
    console.log(result);
    if (result.data.error === 0) {
      dispatch({ type: 'SIGN_UP_FAILD', error: '' });
      routeTo.push('/signupsuccessful');
    } else {
      dispatch({ type: 'SIGN_UP_FAILD', error: result.data.message });
    }
  } catch (e) {
    alert('error:' + e);
  }
};
