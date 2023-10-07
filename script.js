// Contoh program if else
// let questions = confirm("Apakah Anda ingin masuk?");
// if (questions) {
//   let name = prompt("Siapa Nama Anda?");
//   alert(`Hello ${name}`);
// } else {
//   alert(`Hello`);
// }
// ==================================

// Contoh program nested if
// let value = 40;

// if (value >= 90) {
//   console.info(`Nilai Anda : A`);
// } else if (value >= 80 || value >= 70) {
//   console.info(`Nilai Anda : B`);
// } else if (value >= 60 || value >= 50) {
//   console.info(`Nilai Anda : C`);
// } else {
//   console.info(`Maaf Anda Tidak Lulus`);
// }
// ==================================

// Contoh program switch case
// let value = "D";

// switch (value) {
//   case "A":
//     console.info("Selamat Anda Lulus Dengan Sangat Baik");
//     break;
//   case "B":
//   case "C":
//     console.info("Selamat Anda Lulus Dengan Baik");
//     break;
//   default:
//     console.info("Maaf, mungkin Anda Salah Jurusan!");
//     break;
// }
// ==================================

// Contoh program for statement
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         document.writeln("*");
//     }
//     document.writeln("<br />");
// }
// ==================================

// Contoh program while
// let i = 1;
// while (i <= 15) {
//   document.writeln(`<p>Loop ke-${i}</p>`);
//   i++;
// }
// ==================================

// Contoh program do while
// let i = 1;
// do {
//   document.writeln(`<p>Loop ke-${i}</p>`);
//   i++;
// } while (i <= 20);
// ==================================

// Contoh program function
// function getNames(names) {
//   if (names.length === 0) {
//     throw new Error("Names tidak boleh kosong");
//   }

//   console.table(names);
// }

// let names = ["Bram", "Atha", "Adrian", "Fauzan"];
// let names = [];
// try {
//   getNames(names);
// } catch (error) {
//   console.info(`Terjadi error : ${error.message}`);
// }
