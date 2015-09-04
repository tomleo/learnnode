
var machine = 'machine drip';
function coffee(flavor, origin) {
    var str = 'flavor: ' + flavor + '\norigin: ' + origin + '\nmachine: ' + machine + '\n';
    console.log('function coffee');
    console.log(str);
}

var flavor = 'bold';
var origin =' italy';
var machine = 'espresso machine';
var coffee2 = (function coffeeClosure(flavor, origin, machine) {
    return function() {
        var str = 'flavor: ' + flavor + '\norigin: ' + origin + '\nmachine: ' + machine + '\n';
        console.log('coffee2');
        console.log(str);
    }
})(flavor, origin, machine);

var coffee3 = (function coffeeClosure(flavor, origin, machine) {
    return function(flavor, origin, machine) {
        var str = 'flavor: ' + flavor + '\norigin: ' + origin + '\nmachine: ' + machine + '\n';
        console.log('coffee3');
        console.log(str);
    }
})(flavor, origin, machine);

var coffee4 = (function coffeeClosure() {
    var flavor = 'medium';
    var origin = 'columbia';
    var machine = 'pour over';
    return function(f, o, m) {
        var str = 'flavor: ' + flavor + '\norigin: ' + origin + '\nmachine: ' + machine + '\n';
        console.log('coffee4');
        console.log(str);
    }
})();

//do things passed into a function closer get cached


coffee(flavor, origin);
coffee2();
coffee3('light', 'ethiopian', 'aero press');
coffee4();
