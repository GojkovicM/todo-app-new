const usersUrl = "http://localhost:5000/api/users";
const tasksUrl = "http://localhost:5000/api/tasks";

export const userLogin = async (username) => {
  try {
    const res = await fetch(`${usersUrl}/login`, {
      method: "POST",
      body: JSON.stringify(username),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userRegister = async (data) => {
  try {
    const res = await fetch(`${usersUrl}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userDelete = async (id) => {
  try {
    const res = await fetch(`${usersUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (data) => {
  try {
    const res = await fetch(`${tasksUrl}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (id) => {
  try {
    const res = await fetch(`${tasksUrl}/${id}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await fetch(`${tasksUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const taskSolved = async (id, task) => {
  try {
    const res = await fetch(`${tasksUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
