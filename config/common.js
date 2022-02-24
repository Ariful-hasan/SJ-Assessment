import { ACTIVE, INACTIVE } from "./constant.js";


export const setResultsStatus = (results) => {
    for (let counter = 0; counter < results.length; counter++) {
        results[counter].status = changeStatus(results[counter].status);
    }
    return results;
}

export const changeStatus = (resultStatus) => {
    if (resultStatus == ACTIVE) return 'Active';
    else if (resultStatus == INACTIVE) return 'Inactive';
    return resultStatus;
}

export const getControllerNameFromPath = (path) => {
    path = path.split('/');
    path = path.pop() || path.pop();
    return toPascalCase(path);
}

const toPascalCase = (text) => {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

const clearAndUpper = (text) => {
    return text.replace(/-/, "").toUpperCase();
}

export const sendResponse = (response, code, status, msg, data = []) => {
    return response.status(code).json({ status: status, msg: msg, data: data });
    // return response.status(code).send(msg);
}