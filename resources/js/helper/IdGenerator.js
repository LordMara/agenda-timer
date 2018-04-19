export class IdGenerator {
    constructor(id) {
        this._id = id;
    }

    get id() {
        if (this._id === null) {
            this._id = +localStorage.getItem('id') + 1;
        }
        localStorage.setItem('id', this._id);

        return this._id;
    }
}