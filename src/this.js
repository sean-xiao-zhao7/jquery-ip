var obj = {
    name: "vivek",
    getName: function () {
        console.log(this);
    },
};

console.log(obj.getName());
