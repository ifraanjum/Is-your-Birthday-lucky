var dateofbirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var output=document.querySelector("#output")

function compareValues(sum, luckyNumber) {
  // console.log(sum, luckyNumber);
  var result=sum%luckyNumber;
  if(result==0)
  {
    output.innerText=" your Birth date is lucky";
    
  }
  else{
      output.innerText=" your Birth date is not lucky";
  }
}
function checkBirthDateIsLucky() {
  var dob = dateofbirth.value;
  console.log(dob);
  var sum = calculateSum(dob);
  console.log("sum is ", sum);
  if(sum&&dob)
  {
  compareValues(sum, luckyNumber.value);
  }
  else
    output.innerText=" Enter the correct dob and luckyNumber";
}

function calculateSum(dob) {

  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;


}
checkButton.addEventListener("click", checkBirthDateIsLucky)