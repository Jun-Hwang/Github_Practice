const Jun = {
    name: "Jun",
    age: 32, 
    height: "5,10",
    ILoveYou:function(love){
        console.log("I love you so much " + love);
    }
};

Jun.ILoveYou("Kaitlyn");

const calculator = {
    add: function (a, b) {
        console.log (a + b);
    },

    minus: function (a, b) {
        console.log (a - b);
    }, 

    times: function (a, b) {
        console.log (a * b);
    },

    devide: function(a, b) {
        console.log (a / b);
    },

    power: function (a, b) {
        console.log (a**b);
    }
};

calculator.add(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.devide(2,3);
calculator.power(2,3);
