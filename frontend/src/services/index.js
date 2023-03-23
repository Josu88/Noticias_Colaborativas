export const getFilterThemeNewsService = async (theme, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/listNews?theme=${theme}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getAllNewsService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/listNews`, {
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleNewsService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/news/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ username, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserNewsService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${id}/news`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.authToken;
};

export const sendNewsService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/newNews`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteNewsService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/news/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const addPhotoService = async ({ id, data, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/News/${id}/photo`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const likeService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/News/${id}/like`,
    {
      method: "POST",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const disLikeService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/News/${id}/unlike`,
    {
      method: "POST",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteUserService = async ({ password, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "DELETE",
    body: JSON.stringify({ password }),
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editUserEmailUserNameService = async ({
  newEmail,
  newUsername,
  token,
}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "PUT",
    body: JSON.stringify({ newEmail, newUsername }),
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editNewService = async ({
  idNew,
  title,
  leadIn,
  text,
  theme,
  token,
}) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/News/${idNew}`,
    {
      method: "PUT",
      body: JSON.stringify({ title, leadIn, text, theme }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const listUserNameService = async (token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/username`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const listIdUserService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/id`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editPasswordService = async ({
  email,
  newPass,
  confirmNewPass,
  token,
}) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/password`,
    {
      method: "PUT",
      body: JSON.stringify({ email, newPass, confirmNewPass }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getNewByIdUserService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/profile`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.user.news;
};
