import http from "../http-common.js";

class LoginService {

    login(userName, password) { 
        // Create a JSON body
        const data = {
            username: userName,
            password: password            
        };

        //console.log(data.username);
        //console.log(data.password);

        // Send a POST request
        return http.post("/users/login", data);
    }
}

export default new LoginService();
