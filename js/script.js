//1
console.log("----1----");
let str = "Привет",
  sum = 123,
  num = 15.8,
  flag = true,
  txt = "true";
console.log(typeof str);
console.log(typeof sum);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
console.log("");

//2
console.log("----2----");
let a1 = 5 % 3,
  a2 = 3 % 5,
  a3 = 5 + "3",
  a4 = "5" + 3,
  a5 = 75 + "кг",
  a6 = 785 * 653,
  a7 = 100 / 25,
  a8 = 0 * 0,
  a9 = 0 / 2,
  a10 = 89 / 0,
  a11 = 98 + 2,
  a12 = 5 - 98,
  a13 = (8 + 56 * 4) / 5,
  a14 = ((9 - 12) * 7) / (5 + 2),
  a15 = +"123",
  a16 = 1 || 0,
  a17 = false || true,
  a18 = true > 0;

console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);
console.log(typeof a8);
console.log(typeof a9);
console.log(typeof a10);
console.log(typeof a11);
console.log(typeof a12);
console.log(typeof a13);
console.log(typeof a14);
console.log(typeof a15);
console.log(typeof a16);
console.log(typeof a17);
console.log(typeof a18);
console.log("");

//3
console.log("----3----");
let width = 10,
  height = 23;
sRectangle = width * height;
console.log(sRectangle + " см2");
console.log("");

//4
console.log("----4----");
let VCilindra,
  heightCil = 10;
VCilindra = (a7 / 2) ** 2 * 3.1415926 * heightCil;
console.log(VCilindra + " m3");
console.log("");

//5
console.log("----5----");
let rCir = 5;
SKruga = 3.1415926 * rCir ** 2;
console.log(SKruga + " см2");
console.log("");

//6
console.log("----6----");
let OsnTrap1 = 5,
  OsnTrap2 = 7,
  heightTrap = 10;
STrap = 0.5 * (OsnTrap1 + OsnTrap2) * heightTrap;
console.log(STrap + " см2");
console.log("");

//7
console.log("----7----");
let S = 2,
  p = (S * 10) / 100,
  years = 5;
Pereplata = p * years;
console.log(Pereplata + " млн руб");
console.log("");

//8
console.log("----8----");
let a = 8,
  b = 3,
  x;
x = 16 / (a + 2) + b;
console.log(x);
x = (a - 15 * b) / (b - 6);
console.log(x);
x = 23780 / (2 + a + b);
console.log(x);
console.log("");

//9
console.log("----9----");
console.log("Бывало, спит у ног собака,");
console.log("костер занявшийся гудит,");
console.log("и женщина из полумрака");
console.log("глазами зыбкими глядит.");
console.log("");
console.log("Потом под пихтою приляжет");
console.log("на куртку рыжую мою");
console.log("и мне, задумчивая, скажет:");
console.log("");
console.log(`"А ну-ка, спой!.."- и я пою.`);
console.log(``);

//10
console.log("----10----");
let str1 = "индо земля зашаталась под ногами-и вырос,",
  str2 = "и заревел он голосом диким...",
  str3 = "блеснула молния и ударил гром,",
  str4 = "а так какое-то чудище, страшное и мохнатое,",
  str5 = "как будто из-под земли, перед купцом:",
  str6 = "Он подошёл и сорвал аленький цветочек.",
  str7 = "зверь не зверь, человек не человек,",
  str8 = "В ту же минуту, безо всяких туч,",
  text;
text = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;
document.write(text);
console.log(text);