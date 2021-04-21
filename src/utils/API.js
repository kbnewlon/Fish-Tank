const API = {
    login: function (userData) {
        console.log(userData);
        return fetch("http://localhost:8080/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then(res => res.json())
          .catch(err => console.log(err));
      },


    



};

module.exports = API
