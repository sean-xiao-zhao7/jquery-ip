class Base {
    constructor() {
        this.one = 1;
        this.two = 2;
    }
}

class Up extends Base {
    // constructor() {
    //     this.three = 3;
    // }
}

const base = new Base();
const up = new Up();
Base.prototype.three = 3;
console.log(up.three);
