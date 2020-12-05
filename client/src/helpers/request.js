class Request {

    get(url) {
      return fetch(url,{
        method: "GET",
        headers: {"subscription-key": "ca7e563eca174a80ad82eef61fc40776"}
        })
      .then((res) => res.json());
    }

    delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
    }

    post(url, payload){
      return fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

    patch(url, payload){
      return fetch(url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }
}

export default Request;