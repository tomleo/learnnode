var i,
    sum;

i = 2;
sum = 0;

if (process.argv.length <= i) {
    return;
}

for (;i<process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum);

