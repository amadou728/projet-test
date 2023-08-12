import {users} from '../data'


export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("email"));
}

export const saveCurrentUser = (email) => {
    localStorage.setItem("email", email);
}


export const login = (email, password) => {
    if(users.some(user => (user.email === email && user.password === password ))){
        saveCurrentUser(email)
        return true
    }

    return false
}

export const logout  = () => {
    localStorage.removeItem("email");
}


export const checkIfUserExistInDb = (email) => {
    return users.some(user => user.email === email);
}

export const createNewUser = (user) => {
    if(checkIfUserExistInDb(user.email)){
        return {
            status: false,
            msg: "Ce email existe deja"
        }
    }
    const usersLength = users.length;
    users.push({id: usersLength + 1, ...user})
    if(usersLength === users.length){
        return {
            status: false,
            msg: "le compte n'est pas créer"
        }
    }
    return {
        status: true,
        msg: "compte créer avec succès"
    }
}

 