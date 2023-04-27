export const Api = {
    Url: "http://localhost:3000",
  
    users: {
      allUsers: function () {
        return Api.Url + "/users";
      },
      userId: function (id) {
        return this.allUsers() + "/" + id;
      },
      userUpdate: function (id) {
        return this.allUsers() + "/" + id;
      },
      userCreate: function () {
        return this.allUsers() + "/";
      },
      userDelete: function (id) {
        return this.allUsers() + "/" + id;
      },
    },
  
    addresses: {
      allAddresses: function () {
        return Api.Url + "/addresses";
      },
      addressId: function (id) {
        return this.allAddresses() + "/" + id;
      },
      addresCreate: function () {
        return this.allAddresses() + "/";
      },
      addressDelete: function (id) {
        return this.allAddresses() + "/" + id;
      },
    },
  
    // GET
    buildApiGetRequest: function (url) {
      return fetch(url, {
        method: "GET",
      });
    },
  
    // POST
    buildApiPostRequest: function (url, body) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-type": "application/json",
        }),
      });
    },
  
    // PUT
    buildApiPutRequest: function (url, body) {
      return fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-type": "application/json",
        }),
      });
    },
  
    // DELETE
    buildApiDeleteRequest: function (url) {
      return fetch(url, {
        method: "DELETE",
      });
    },
  };
  