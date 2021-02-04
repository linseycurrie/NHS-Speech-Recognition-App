class Request {

  constructor() {
    this.base = "";
  }

    get(url) {
      return fetch(this.base + url, {
        method: "GET",
        headers: {"subscription-key": "805f56b529eb41a4b637be5b35154149"}
        })
      .then((res) => res.json());
    }

    delete(url) {
      return fetch(this.base + url, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
    }

    post(url, payload) {
      return fetch(this.base + url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

    // patch(url, payload) {
    //   return fetch(url, {
    //     method: "PATCH",
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(payload)
    //   })
    // }
}

export default Request;