/*
 * Script to load image sequences into lists for jsPsych animation plugin
 * Nate Gonzales Hess 2021
 */
var length = 756;
var beta = 25

let fractal_s999_b25_bw = [];
let fractal_s999_b30_bw = [];
let fractal_s999_b35_bw = [];
let fractal_s999_b40_bw = [];
let fractal_s999_b45_bw = [];
let fractal_s999_b50_bw = [];
let fractal_s999_b55_bw = [];

let fractal_s888_b25_bw = [];
let fractal_s888_b30_bw = [];
let fractal_s888_b35_bw = [];
let fractal_s888_b40_bw = [];
let fractal_s888_b45_bw = [];
let fractal_s888_b50_bw = [];
let fractal_s888_b55_bw = [];

let fractal_s777_b25_bw = [];
let fractal_s777_b30_bw = [];
let fractal_s777_b35_bw = [];
let fractal_s777_b40_bw = [];
let fractal_s777_b45_bw = [];
let fractal_s777_b50_bw = [];
let fractal_s777_b55_bw = [];

let fractal_s999_b25_gs = [];
let fractal_s999_b30_gs = [];
let fractal_s999_b35_gs = [];
let fractal_s999_b40_gs = [];
let fractal_s999_b45_gs = [];
let fractal_s999_b50_gs = [];
let fractal_s999_b55_gs = [];

let fractal_s888_b25_gs = [];
let fractal_s888_b30_gs = [];
let fractal_s888_b35_gs = [];
let fractal_s888_b40_gs = [];
let fractal_s888_b45_gs = [];
let fractal_s888_b50_gs = [];
let fractal_s888_b55_gs = [];

let fractal_s777_b25_gs = [];
let fractal_s777_b30_gs = [];
let fractal_s777_b35_gs = [];
let fractal_s777_b40_gs = [];
let fractal_s777_b45_gs = [];
let fractal_s777_b50_gs = [];
let fractal_s777_b55_gs = [];

//Make 999 lists
for (i = 1; i < length; i++) {
  fractal_s999_b25_bw.push('img/999/b25/bw/999_b25(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b30_bw.push('img/999/b30/bw/999_b30(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b35_bw.push('img/999/b35/bw/999_b35(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b40_bw.push('img/999/b40/bw/999_b40(' + i + ').gif')  
}
for (i = 1; i < length; i++) {
  fractal_s999_b45_bw.push('img/999/b45/bw/999_b45(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b50_bw.push('img/999/b50/bw/999_b50(' + i + ').gif')  
}
for (i = 1; i < length; i++) {
  fractal_s999_b55_bw.push('img/999/b55/bw/999_b55(' + i + ').gif')  
}
//Make 888 lists
for (i = 1; i < length; i++) {
  fractal_s888_b25_bw.push('img/888/b25/bw/888_b25(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b30_bw.push('img/888/b30/bw/888_b30(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b35_bw.push('img/888/b35/bw/888_b35(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b40_bw.push('img/888/b40/bw/888_b40(' + i + ').gif')  
}
for (i = 1; i < length; i++) {
  fractal_s888_b45_bw.push('img/888/b45/bw/888_b45(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b50_bw.push('img/888/b50/bw/888_b50(' + i + ').gif')  
}
for (i = 1; i < length; i++) {
  fractal_s888_b55_bw.push('img/888/b55/bw/888_b55(' + i + ').png')  
}
//Make 777 lists
for (i = 1; i < length; i++) {
  fractal_s777_b25_bw.push('img/777/b25/bw/777_b25(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b30_bw.push('img/777/b30/bw/777_b30(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b35_bw.push('img/777/b35/bw/777_b35(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b40_bw.push('img/777/b40/bw/777_b40(' + i + ').gif')  
}
for (i = 1; i < length; i++) {
  fractal_s777_b45_bw.push('img/777/b45/bw/777_b45(' + i + ').gif') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b50_bw.push('img/777/b50/bw/777_b50(' + i + ').gif')  
}
for (i = 1; i < length; i++) {
  fractal_s777_b55_bw.push('img/777/b55/bw/777_b55(' + i + ').gif')  
}

//GRAYSCALE

//Make 999 lists
for (i = 1; i < length; i++) {
  fractal_s999_b25_gs.push('img/999/b25/gs/999_b25(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b30_gs.push('img/999/b30/gs/999_b30(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b35_gs.push('img/999/b35/gs/999_b35(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b40_gs.push('img/999/b40/gs/999_b40(' + i + ').png')  
}
for (i = 1; i < length; i++) {
  fractal_s999_b45_gs.push('img/999/b45/gs/999_b45(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s999_b50_gs.push('img/999/b50/gs/999_b50(' + i + ').png')  
}
for (i = 1; i < length; i++) {
  fractal_s999_b55_gs.push('img/999/b55/gs/999_b55(' + i + ').png')  
}
//Make 888 lists
for (i = 1; i < length; i++) {
  fractal_s888_b25_gs.push('img/888/b25/gs/888_b25(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b30_gs.push('img/888/b30/gs/888_b30(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b35_gs.push('img/888/b35/gs/888_b35(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b40_gs.push('img/888/b40/gs/888_b40(' + i + ').png')  
}
for (i = 1; i < length; i++) {
  fractal_s888_b45_gs.push('img/888/b45/gs/888_b45(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s888_b50_gs.push('img/888/b50/gs/888_b50(' + i + ').png')  
}
for (i = 1; i < length; i++) {
  fractal_s888_b55_gs.push('img/888/b55/gs/888_b55(' + i + ').png')  
}
//Make 777 lists
for (i = 1; i < length; i++) {
  fractal_s777_b25_gs.push('img/777/b25/gs/777_b25(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b30_gs.push('img/777/b30/gs/777_b30(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b35_gs.push('img/777/b35/gs/777_b35(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b40_gs.push('img/777/b40/gs/777_b40(' + i + ').png')  
}
for (i = 1; i < length; i++) {
  fractal_s777_b45_gs.push('img/777/b45/gs/777_b45(' + i + ').png') 
}
for (i = 1; i < length; i++) {
  fractal_s777_b50_gs.push('img/777/b50/gs/777_b50(' + i + ').png')  
}
for (i = 1; i < length; i++) {
  fractal_s777_b55_gs.push('img/777/b55/gs/777_b55(' + i + ').png')  
}

