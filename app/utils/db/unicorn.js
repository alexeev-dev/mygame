export default {
  save(params) {
    return fetch('/v1/unicorn', {
      method: 'POST',
      body: JSON.stringify(params)
    }).then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
  }
}
