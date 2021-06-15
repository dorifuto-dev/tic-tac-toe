class Player {
  constructor(token, id) {
    this.token = token;
    this.wins = 0;
    this.id = id;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this.wins));

  }

  retrieveWinsFromStorage() {
    return JSON.parse(localStorage.getItem(this.id));
  }
}
