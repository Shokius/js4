// Task 1
document.write('Task 1<br>');

let a = [1,2,3,4,5];

for(let i = 0; i < a.length; i++) {
    document.write(a[i] + '<br>');
}

document.write('<br>');

// Task 2
document.write('Task 2<br>');

let b = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < b.length; i++) {
    if(b[i] < -3 && b[i] > -10) {
        document.write(b[i] + '<br>');
    }
}

document.write('<br>');

// Task 3

console.log('Task 3');

let c = [],
    d = 23;

while(d <= 57) {
    c.push(d);
    d++;
}

console.log(c);
console.log('');

let e = [];

for(let i = 23; i <= 57; i++) {
    e.push(i);
}

let result = 0;

for(let i = 0; i < e.length; i++) {
    result += e[i];
}

console.log(e);
console.log('');
console.log('Сумма элементов = ' + result);
console.log('');

// Task 4

console.log('Task 4');

let f = ['10', '20', '30', '50', '235', '3000'];

for(let i = 0; i < f.length; i++) {
    if(f[i][0] == '1' || f[i][0] == '2' || f[i][0] == '5') {
        console.log(f[i]);
    }   else {
        continue;
    }
}

console.log('');

// Task 5

document.write('Task 5<br>');

let g = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(let i = 0; i < g.length; i++) {
    if(g[i] == 'СБ' || g[i] == 'ВС') {
        document.write('<strong>' + g[i] + '</strong>' + '<br>');
    }   else {
        document.write(g[i] + '<br>');
    }
}

document.write('<br>');

// Task 6

console.log('Task 6');

let h,
    i = [];

for(let j = 0;; j++) {
    let h = +prompt('Введите числа для массива');
        if(h) {
            i.push(h);
        }   else {
            break;
        }
}

let k = +prompt('Введите произвольное число');

i.push(k);

console.log(i[i.length-1]);
console.log('');

// Task 7

console.log('Task 7');

let l,
    m = [];

for(let i = 0;; i++) {
    let l = +prompt('Введите чилса для массива');

    if(l) {
        m.push(l);
    }   else {
        break;
    }
}

console.log(m);
console.log('');

let n = m.sort(function (a, b) {
    return a- b;
})

console.log(n);
console.log('');

// Task 8

console.log('Task 8');

let o = [12, false, 'Текст', 4, 2, -5, 0],
    o1 = o.length,
    p = [];

while(o1 > 0) {
    o1--;
    p.push(o[o1]);
}

console.log(p);
console.log('');
console.log(o.reverse());
console.log('');

//Task 9

console.log('Task 9');

let r = [5, 9, 21, , , 9, 78, , , , 6],
    s = 0;

for(let i = 0; i <= r.length-1; i++) {
    if(r[i] == undefined) {
        s++;
    }
}

console.log(s);
console.log('');

//Task 10

console.log('Task 10');

let t = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    v = 0,
    f0 = t.indexOf(0),
    l0 = t.lastIndexOf(0);

for(let i = f0; i < l0; i++) {
    v += t[i];
}

console.log(v);

//Task 11

document.write('Task 11<br>');

function drawFig (z) {
    for(let i = z; i >= 0; i--) {
        for(let j = 0; j < i; j++) {
            document.write('&nbsp;');
        }

        for(let u = z-1; u >= i; u--) {
            document.write('&and;');
        }

        document.write('<br>');
    }
}

let y = +prompt('Введите число для пирамиды');
drawFig(y);






