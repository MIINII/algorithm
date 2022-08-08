process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = "*".repeat(a)+"\n" // \n이 줄바꿈
    const square = row.repeat(b);
    console.log(square)
});