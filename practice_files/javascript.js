/*
start practice code of javascript
*/

change = () => {
  document.getElementById("cw").innerHTML = "Hello Mr.White";
}

/* function of date and time */
function date() {
  document.getElementById("ce").innerHTML = Date();
}

/* function of change styles*/
style = () => {
  document.getElementById("cr").style.color = "red";
  document.getElementById("cr").style.backgroundColor = "yellow";
}

/*
◘ booleans
 */

/* using boolean function */
document.getElementById("cd").innerHTML = Boolean(10 < 20);

/*note: you can show up this result without Boolean()
like this = 10 < 20 */

/*
♦ Comparison Operators
 */

/*

♦ = "asignation"
♦ == "equal to"
♦ === "equal value and equal type"
♦ != "not equal"
♦ !== "not equal type and value"
♦ < "less than"
♦ > "greater than"
♦ <= "less than and equal"
♦ > "greater than and equal"

 */

/*
• Logical Operators
*/

/*

• && == and
• || == or
• ! == not

 */

/* using && */
var u = 8;
let p = 5;

document.getElementById("cf").innerHTML =
(u < p && p > u) + "<br>" +
(u > p && p < u);

/* using || */
let i = 87;
var t = 25;

document.getElementById("cg").innerHTML =
(i == 78 || t == 25) + "<br>" +
(t == 87 || i == 87) +  "<br>" +
(i == 74 || t == 5);

/* using ! */
/*
let p = 54;
let e = 74;

document.getElementById("ch").innerHTML =
!(p === e) + "<br>" +
!(e > p);
*/

/*note = The NOT operator (!) returns true for false statements and false for true statements.*/

//♣ Condicional (Ternary) Operators

/*
♣ t ? p : y
*/

//using condicional operator
/*
insert1 = () => {
  let age = document.getElementById("cj").value;
  let yuy = (age > 30) ? "She is too old" : "She is perfect ";

  document.getElementById("ck").innerHTML = yuy + "to me";

}
*/

insert2 = () => {
  let votable;
  let age2 = Number(document.getElementById("cj").value);
  if (isNaN(age2)) {
    votable = alert("Input is not number");
  } else {
    votable = (age2 > 30) ? "She is too old" : "She is perfect";
  }
  document.getElementById("ck").innerHTML = votable + " " + "to me";
}




/*             */
