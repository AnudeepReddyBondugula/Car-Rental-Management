const constants = import.meta.env;

export const sendJsonRequest = async (path='/', method = 'GET', headers, body) => {
    const defaultHeaderOptions = {
        "Content-Type" : "application/json",
        "Authorization" : sessionStorage.getItem("jwToken")
    }

    for(var key in headers) {
        defaultHeaderOptions[key] = headers[key];
    }

    const request = {
        method,
        headers: defaultHeaderOptions,
        body
    }

    const url = constants.VITE_BACKEND_URL + path;
    const response = await fetch(url, request);
    const responseBody = await response.json();
    const status = response.status;
    return {status, responseBody}
}

export const sendFormDataRequest = async (path='/', method='GET', formData, headers) => {
    const request = {
        method,
        body : formData,
        headers : {...headers, "Authorization" : sessionStorage.getItem("jwToken")}
    }

    const url = constants.VITE_BACKEND_URL + path;
    const response = await fetch(url, request);
    const responseBody = await response.json();
    const status = response.status;
    return {status, responseBody}
}

export const getImage = async (imageName) => {
    const url = constants.VITE_BACKEND_URL + "/static/" + imageName;
    const response = await fetch(url);
    const image = await response.bolb();
    const imageURL = URL.createObjectURL(image);
    return url;
}
