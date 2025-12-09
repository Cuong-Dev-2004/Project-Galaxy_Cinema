
export const getToken = (tokenname) => {
    return localStorage.getItem(tokenname);
};


export const setToken = (tokenname, token) => {
    localStorage.setItem(tokenname, token);
};


export const removeToken = (tokenname) => {
    localStorage.removeItem(tokenname);
};

export const isLoggedIn = (tokenname) => {
    return !!localStorage.getItem(tokenname);
};
