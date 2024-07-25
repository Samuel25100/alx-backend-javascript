export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this.sqft;
  }

  set sqft(sqft) {
    this.sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
