import { sendJsonRequest } from "./HttpProvider"

export const verifyToken = async () => {
    const {status, responseBody} = await sendJsonRequest("/dashboard");
    if ((status >= 400)){
        sessionStorage.removeItem("jwToken");
        return false;
    }
    else{
        sessionStorage.setItem("details", JSON.stringify(responseBody.details));
        return true;
    }
}

export const verifyAndRedirect = async (navigate, redirectSuccessPath, redirectFailedPath) => {
    if (sessionStorage.getItem("jwToken") && await verifyToken(sessionStorage.getItem("jwToken"))){

        if (redirectSuccessPath) navigate(redirectSuccessPath);

    } else{

        if (redirectFailedPath) navigate(redirectFailedPath);

    }
    
}


export const loginAccount = async (username, password) => {
    try {
        const {status, responseBody} = await sendJsonRequest("/login", "POST", null, JSON.stringify({username, password}));
        if (status >= 400){
            return {
                returnValue : false,
                error : status + " " + responseBody.error
            }
        }
        else{
            const {jwToken} = responseBody;
            sessionStorage.setItem("jwToken", jwToken);
            return {
                returnValue : true,
                message : status + " " + responseBody.message
            }
        }
    } catch (err) {
        console.error(err);
        return {
            returnValue : false,
            error : "Fetch failed"
        }
    }
}

export const logoutAccount = (navigate) => {
    sessionStorage.removeItem("jwToken");
    navigate("/");
}

export const createAccount = async ({
    username,
    password,
    retypePassword,
    fullName,
    contactNumber
}) => {
    try{
        if (password !== retypePassword){
            return {
                returnValue : false,
                error : "Passwords don't match"
            }
        }
        let body = {username, password, fullName, contactNumber};
        const {status, responseBody} = await sendJsonRequest("/signup", "POST", null, JSON.stringify(body))
        if (status >= 400) {
            return {
                returnValue : false,
                error : status + " " + responseBody.error
            }
        } else{
            return {
                returnValue : true,
                message : status + " " + responseBody.message
            }
        }
    
    } catch (err) {
        console.error(err);
        return {
            returnValue : false,
            error : "Fetch failed"
        }
    }

}