/*
 * Script to load image sequences into lists for jsPsych animation plugin
 * Nate Gonzales Hess 2022
 * Yikes, this is embarassing. Gotta figure out correct method someday.
 */

var length = [378 + 1, 504 + 1, 756 + 1, 1134 + 1, 1512 + 1];
var bdir = [2.5, 3, 3.5, 4, 4.5, 5, 5.5];
var bnum = ['_b25_s', '_b35_s', '_b40_s', '_b45_s', '_b55_s'];
var spds = [0.5, 0.66667, 1, 1.5, 2];
var seed = [117, 238, 314]

//for (var i = 1; i < 3; i++) {
//    for (k = 1; k < 5; i++){
//        for (v = 1; v < 5; v++){
//            this['fractal_s' + seed[i] + bnum[k] + (v+1)] = [];
//        }
//    }
//}

//Seed=117
let fractal_s117_b25_s1 = [];
let fractal_s117_b25_s2 = [];
let fractal_s117_b25_s3 = [];
let fractal_s117_b25_s4 = [];
let fractal_s117_b25_s5 = [];
let fractal_s117_b35_s1 = [];
let fractal_s117_b35_s2 = [];
let fractal_s117_b35_s3 = [];
let fractal_s117_b35_s4 = [];
let fractal_s117_b35_s5 = [];
let fractal_s117_b40_s1 = [];
let fractal_s117_b40_s2 = [];
let fractal_s117_b40_s3 = [];
let fractal_s117_b40_s4 = [];
let fractal_s117_b40_s5 = [];
let fractal_s117_b45_s1 = [];
let fractal_s117_b45_s2 = [];
let fractal_s117_b45_s3 = [];
let fractal_s117_b45_s4 = [];
let fractal_s117_b45_s5 = [];
let fractal_s117_b55_s1 = [];
let fractal_s117_b55_s2 = [];
let fractal_s117_b55_s3 = [];
let fractal_s117_b55_s4 = [];
let fractal_s117_b55_s5 = [];
//Seed=238
let fractal_s238_b25_s1 = [];
let fractal_s238_b25_s2 = [];
let fractal_s238_b25_s3 = [];
let fractal_s238_b25_s4 = [];
let fractal_s238_b25_s5 = [];
let fractal_s238_b35_s1 = [];
let fractal_s238_b35_s2 = [];
let fractal_s238_b35_s3 = [];
let fractal_s238_b35_s4 = [];
let fractal_s238_b35_s5 = [];
let fractal_s238_b40_s1 = [];
let fractal_s238_b40_s2 = [];
let fractal_s238_b40_s3 = [];
let fractal_s238_b40_s4 = [];
let fractal_s238_b40_s5 = [];
let fractal_s238_b45_s1 = [];
let fractal_s238_b45_s2 = [];
let fractal_s238_b45_s3 = [];
let fractal_s238_b45_s4 = [];
let fractal_s238_b45_s5 = [];
let fractal_s238_b55_s1 = [];
let fractal_s238_b55_s2 = [];
let fractal_s238_b55_s3 = [];
let fractal_s238_b55_s4 = [];
let fractal_s238_b55_s5 = [];
//Seed=238
let fractal_s314_b25_s1 = [];
let fractal_s314_b25_s2 = [];
let fractal_s314_b25_s3 = [];
let fractal_s314_b25_s4 = [];
let fractal_s314_b25_s5 = [];
let fractal_s314_b35_s1 = [];
let fractal_s314_b35_s2 = [];
let fractal_s314_b35_s3 = [];
let fractal_s314_b35_s4 = [];
let fractal_s314_b35_s5 = [];
let fractal_s314_b40_s1 = [];
let fractal_s314_b40_s2 = [];
let fractal_s314_b40_s3 = [];
let fractal_s314_b40_s4 = [];
let fractal_s314_b40_s5 = [];
let fractal_s314_b45_s1 = [];
let fractal_s314_b45_s2 = [];
let fractal_s314_b45_s3 = [];
let fractal_s314_b45_s4 = [];
let fractal_s314_b45_s5 = [];
let fractal_s314_b55_s1 = [];
let fractal_s314_b55_s2 = [];
let fractal_s314_b55_s3 = [];
let fractal_s314_b55_s4 = [];
let fractal_s314_b55_s5 = [];

//3 Digit Formatting Function
function lpad(value, padding) {
    if (value <= 999) {
        var zeroes = new Array(padding + 1).join("0");
        return (zeroes + value).slice(-padding);
    } else {
        return value
    }
}
//http://localhost/akiyoshi3/img/117/3/2/bw/000.png
//http://localhost/akiyoshi3/img/117/4/2/bw/000.png

//Seed=117 Beta=2.5
for (i = 1; i < length[0]; i++) {
    fractal_s117_b25_s1.push('img/117/2.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s117_b25_s2.push('img/117/2.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s117_b25_s3.push('img/117/2.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s117_b25_s4.push('img/117/2.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s117_b25_s5.push('img/117/2.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=117 Beta=3.5
for (i = 1; i < length[0]; i++) {
    fractal_s117_b35_s1.push('img/117/3.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s117_b35_s2.push('img/117/3.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s117_b35_s3.push('img/117/3.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s117_b35_s4.push('img/117/3.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s117_b35_s5.push('img/117/3.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=117 Beta=4.0
for (i = 1; i < length[0]; i++) {
    fractal_s117_b40_s1.push('img/117/4/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s117_b40_s2.push('img/117/4/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s117_b40_s3.push('img/117/4/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s117_b40_s4.push('img/117/4/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s117_b40_s5.push('img/117/4/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=117 Beta=4.5
for (i = 1; i < length[0]; i++) {
    fractal_s117_b45_s1.push('img/117/4.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s117_b45_s2.push('img/117/4.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s117_b45_s3.push('img/117/4.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s117_b45_s4.push('img/117/4.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s117_b45_s5.push('img/117/4.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=117 Beta=5.5
for (i = 1; i < length[0]; i++) {
    fractal_s117_b55_s1.push('img/117/5.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s117_b55_s2.push('img/117/5.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s117_b55_s3.push('img/117/5.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s117_b55_s4.push('img/117/5.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s117_b55_s5.push('img/117/5.5/2/bw/' + lpad(i, 3) + '.png')
}

//Seed=238 Beta=2.5
for (i = 1; i < length[0]; i++) {
    fractal_s238_b25_s1.push('img/238/2.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s238_b25_s2.push('img/238/2.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s238_b25_s3.push('img/238/2.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s238_b25_s4.push('img/238/2.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s238_b25_s5.push('img/238/2.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=238 Beta=3.5
for (i = 1; i < length[0]; i++) {
    fractal_s238_b35_s1.push('img/238/3.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s238_b35_s2.push('img/238/3.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s238_b35_s3.push('img/238/3.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s238_b35_s4.push('img/238/3.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s238_b35_s5.push('img/238/3.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=238 Beta=4.0
for (i = 1; i < length[0]; i++) {
    fractal_s238_b40_s1.push('img/238/4/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s238_b40_s2.push('img/238/4/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s238_b40_s3.push('img/238/4/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s238_b40_s4.push('img/238/4/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s238_b40_s5.push('img/238/4/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=238 Beta=4.5
for (i = 1; i < length[0]; i++) {
    fractal_s238_b45_s1.push('img/238/4.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s238_b45_s2.push('img/238/4.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s238_b45_s3.push('img/238/4.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s238_b45_s4.push('img/238/4.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s238_b45_s5.push('img/238/4.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=238 Beta=5.5
for (i = 1; i < length[0]; i++) {
    fractal_s238_b55_s1.push('img/238/5.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s238_b55_s2.push('img/238/5.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s238_b55_s3.push('img/238/5.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s238_b55_s4.push('img/238/5.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s238_b55_s5.push('img/238/5.5/2/bw/' + lpad(i, 3) + '.png')
}

//Seed=314 Beta=2.5
for (i = 1; i < length[0]; i++) {
    fractal_s314_b25_s1.push('img/314/2.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s314_b25_s2.push('img/314/2.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s314_b25_s3.push('img/314/2.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s314_b25_s4.push('img/314/2.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s314_b25_s5.push('img/314/2.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=314 Beta=3.5
for (i = 1; i < length[0]; i++) {
    fractal_s314_b35_s1.push('img/314/3.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s314_b35_s2.push('img/314/3.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s314_b35_s3.push('img/314/3.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s314_b35_s4.push('img/314/3.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s314_b35_s5.push('img/314/3.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=314 Beta=4.0
for (i = 1; i < length[0]; i++) {
    fractal_s314_b40_s1.push('img/314/4/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s314_b40_s2.push('img/314/4/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s314_b40_s3.push('img/314/4/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s314_b40_s4.push('img/314/4/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s314_b40_s5.push('img/314/4/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=314 Beta=4.5
for (i = 1; i < length[0]; i++) {
    fractal_s314_b45_s1.push('img/314/4.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s314_b45_s2.push('img/314/4.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s314_b45_s3.push('img/314/4.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s314_b45_s4.push('img/314/4.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s314_b45_s5.push('img/314/4.5/2/bw/' + lpad(i, 3) + '.png')
}
//Seed=314 Beta=5.5
for (i = 1; i < length[0]; i++) {
    fractal_s314_b55_s1.push('img/314/5.5/0.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[1]; i++) {
    fractal_s314_b55_s2.push('img/314/5.5/0.66667/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[2]; i++) {
    fractal_s314_b55_s3.push('img/314/5.5/1/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[3]; i++) {
    fractal_s314_b55_s4.push('img/314/5.5/1.5/bw/' + lpad(i, 3) + '.png')
}
for (i = 1; i < length[4]; i++) {
    fractal_s314_b55_s5.push('img/314/5.5/2/bw/' + lpad(i, 3) + '.png')
}