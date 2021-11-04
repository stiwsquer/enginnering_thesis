export const fetchRegister = async (values) => {
  try {
    let res = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
      }),
    });
    res = await res.json();
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchLogin = async (values) => {
  try {
    let res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        ...values,
      }),
    });

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchLogout = async () => {
  try {
    let res = await fetch('http://localhost:3001/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchVerify = async () => {
  try {
    let res = await fetch('http://localhost:3001/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchExercisesByName = async (name) => {
  try {
    let res = await fetch(`http://localhost:3001/exercise/name/${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export const fetchAllExercises = async () => {
  try {
    let res = await fetch(`http://localhost:3001/exercise`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    res = await res.json();
    console.log(res);
    return res;
  } catch (err) {
    return console.error(err);
  }
};