var i,
    sum;

i = 2;
sum = 0;

if (process.argv.length <= i) {
    return;
}

for (;i<process.argv.length; i++) {
    sum += Number(args[i]);
}
console.log(sum);

