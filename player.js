class Player {
  constructor(token) {
    this.token = token;
    this.wins = 0;
    this.id = Date.now();
  }

  saveWinsToStorage() {
    var wins = this.wins;
    localStorage.setItem(parseInt(this.id), JSON.stringify(wins))

  }

  retrieveWinsFromStorage() {

  }
}
