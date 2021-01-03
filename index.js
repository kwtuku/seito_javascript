let unko = "Hello World!";

// unko = "Hello World2!!";

const bigUnko = "He..Hell...Hello World!" ;

const inoki = ["いーち","にーい","さーん","ダーー！！"];


// let index = 0;
// while(index < inoki.length){
//   console.log(inoki[index]);
//   index++;  //１たす
// }


// if(inoki.length > 5){
//   console.log("ボンバイエ！");
// } else {
//   console.log("ボンバ...!");
// }


const test = (arg) => {
  if(inoki.length > arg){
   console.log("ボンバイエ！");
  } else {
    console.log("ボンバ...!");
  }
      
};

// test(3);
// test(5);
// test(4);


const unko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("Hello woeld!");
  }
};

// console.log(unko2);
// console.log(unko2.size);
// console.log(unko2.goToilet);


// console.log(window.innerHeight);

// window.alert("Unko!");


// console.log(document);

// console.log(document.getElementsByTagName("button")[0]);


document.getElementsByTagName("button")[0].addEventListener("click", () => {
  window.alert("Hello world!");
});
