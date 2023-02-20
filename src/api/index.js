const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api/';

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUserPublicRoutine = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getActivityPublicRoutines = async (activityId) => {
  try {
    const response = await fetch(`${BASE_URL}activities/${activityId}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUserRoutine = async (username) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const postActivities = async (name, description) => {
  const token = localStorage.getItem('token')
  try {
    const response = await fetch(`${BASE_URL}activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateActivities = async (activityId, name, description) => {
  const response = await fetch(`${BASE_URL}/activities/${activityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateActivityDescription = async (activityId, description) => {
  const token = localStorage.getItem('token')
  const newDescription = prompt("Please enter a new description for the Activity")
  const response = await fetch(`${BASE_URL}/activities/${activityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      description: `${newDescription}`,
    }),
  });
  const result = await response.json();
  return result;
};

export const getRoutineActivities = async (activityId) => {
  const response = await fetch(`${BASE_URL}activities/${activityId}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const postRoutines = async (name, goal, isPublic,) => {
  const token = localStorage.getItem('token')
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateRoutines = async (routineId, name, goal, isPublic) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/routines/${routineId}`, {

    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: isPublic,
    }),
  });
  const result = await response.json();
  return result;
};

export const deleteRoutine = async (token, routineId) => {
  const response = await fetch(`${BASE_URL}routines/${routineId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const attachActivity = async (activityId, count, duration, routineId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}routines/${routineId}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      activityId: activityId,
      count: count,
      duration: duration,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateRoutineActivity = async (routineActivityId, count, duration) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}routine_activities/${routineActivityId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        count: count,
        duration: duration,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const deleteRoutineActivity = async (routineActivityId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${BASE_URL}routine_activities/${routineActivityId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};