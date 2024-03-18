const funcOuter = (paramOuter) => {
    let private = paramOuter;
    return (paramInner) => {
        console.log("paramOuter is " + private);
        console.log("Private is " + private);
        console.log(private === paramOuter);
        private += 1;
        console.log("paramOuter is " + private);
        console.log("Private is " + private);
        return private + paramInner;
    };
};

const funcOuter1 = funcOuter(1);
// const funcOuter2 = funcOuter(2);

console.log(funcOuter1(1) + "\n");
// console.log(funcOuter2(1));
console.log(funcOuter1(2));
console.log(funcOuter1(3));
