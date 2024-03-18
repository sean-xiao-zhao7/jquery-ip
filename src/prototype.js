class doSomething {
    constructor() {}
}
doSomething.prototype.foo = "bar";
const doSomethingInstance = new doSomething();
doSomethingInstance.prop = "test";
console.log(doSomethingInstance);
