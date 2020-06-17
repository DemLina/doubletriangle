function DoubleTriangle() {
    let a = "";
    let space=n;

    for (let i = 0; i < n; i++) {
        a = (a + "#");
        space-=1;
        document.write(('&nbsp '.repeat(space))+a+ '&nbsp'.repeat(2)+a+'<br>');

    }
}
let n = prompt("Введите количество строк");
DoubleTriangle();


