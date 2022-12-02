export const get = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(`http://localhost:4000/${url}`, options);
    if (response.ok) {
        const dataFromGetRequest = await response.json();
        return dataFromGetRequest;
    }
};

export const post = async (body, url) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    const response = await fetch(`http://localhost:4000/${url}`, options);
    if (response.ok) {
        const dataFromPostRequest = await response.json();
        return dataFromPostRequest;
    }
};

export const patch = async (body, url) => {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
        },
        body: JSON.stringify(body),
    };
    const response = await fetch(`http://localhost:4000/${url}`, options);
    if (response.ok) {
        const dataFromPatchRequest = await response.json();
        return dataFromPatchRequest;
    }
};