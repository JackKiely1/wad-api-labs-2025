export const getTasks = async () => {
    const response = await fetch(
        `http://localhost:8080/api/tasks`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};


export const addTask = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/tasks`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const deleteTask = async (id) => {
    const res =  fetch(
        `http://localhost:8080/api/tasks/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return res;
};

export const updateTask = async (data) => {
    const res = await fetch(
        `http://localhost:8080/api/tasks/${data._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};


export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

