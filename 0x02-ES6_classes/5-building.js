export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this._sqft = undefined;
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
