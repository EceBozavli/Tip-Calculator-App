let bill = 0;
let person = 0;
let tip  = 0;
let kisibasıödeme;
let toplamborc;

calcBtn.addEventListener('click',hesapprogramı);
resetBtn.addEventListener('click',resetprogramı);

if (bill==0 || person==0 || tip==0)
  alert ('Lütfen değerleri giriniz');
else {
  hesapprogramı();
  resetprogramı();
}

function hesapprogramı () {

  let bill = Number(inputBill.value);
  let tip = Number(inputTip.value);
  let person = Number(inputPeople.value);
    
  if (bill==0 || person==0 || tip==0)
    alert ('Lütfen geçerli değer giriniz');
  totalborc ();
  kisibasıborc ();
  tipTotal.innerText = toplamborc;
  tipAmount.innerText = kisibasıödeme;
    
  function totalborc () {
  toplamborc=bill+(bill*(tip/100));
  }  

  function kisibasıborc () {
  kisibasıödeme=toplamborc/person;
  }
}

function resetprogramı () {
  document.getElementById("inputBill").value="0";
  document.getElementById("inputTip").value="0";
  document.getElementById("inputPeople").value="0";
  tipTotal.innerText = 0;
  tipAmount.innerText = 0;
}