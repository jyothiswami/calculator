let res = document.querySelector('#result');
let sum = "";

function addToHtmlResult(values) {
    if (values === '') {
        res.innerHTML = '0';
        return;
    }
    res.innerHTML = values;
}

function clearEverything() {
    // alert('clears');
    sum =  "";
    addToHtmlResult(sum);
}

function clearLast() {
    // alert('clear last');
    let temp = "";
    for (let i = 0; i < sum.length - 1; i++) {
        temp = temp + sum[i];
    }
    sum = temp;
    addToHtmlResult(sum);
} 

function sumItUp() {
    // alert('sums up');
    sum = eval(sum);
    addToHtmlResult(sum);
}

function add(char) {
    // alert('add '+char);
    // sum += char;
    sum = sum + char;
    addToHtmlResult(sum);
}