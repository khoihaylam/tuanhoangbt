let a = 6;
let b = 1;
let s = 0;
for (let i = a; i >= b; i--) {
  s = s + i;
}
console.log(s); //bai 3 nha thay
// bai 4
let n = 5;
let s1 = 1;
// c1:
for (let i = 1; i <= n; i++) {
  s1 = s1 * i;
}
console.log(s1);
let count = 1;
let s2 = 1;
while (count <= 5) {
  s2 = s2 * count;
  count++;
}
console.log(s2);
// bai 7
let c = 1;
let d = 2;
let e = 3;
let f = 4;
max = c;
if (d > max) {
  max = d;
}
if (e > max) {
  max = e;
}
if (f > max) {
  max = f;
}
console.log(max);
min = c;
if (d < min) {
  min = d;
}
if (e < min) {
  min = e;
}
if (f < min) {
  min = f;
}
console.log(min);
// bai 8
// in bang cuu chuong
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let g = i * j;
    console.log(`${i}*${j}=${g}`);
  }
}
