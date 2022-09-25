var input_years_ago = document.querySelector("#input_years_ago");
var input_km = document.querySelector("#input_km");
var input_car_type = document.querySelector("#input_car_type");

var btn = document.querySelector("#btn_disappear");
document.addEventListener("check", calculations);

function calculations() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  var dateOne = new Date(start);
  var dateTwo = new Date(end);
  var time = Math.abs(dateTwo - dateOne);
  var vat = 1.23;
  var drive_5y_or_less = 1.2;
  var price_for_1km = 0.49;
  var pay_more_for_standard = 1.3;
  var pay_more_for_medium = 1.6;
  var pay_more_for_premium = 2;
  var price_a_day = 70;

  if (input_years_ago.value < 5 && input_car_type.value == "basic") {
    var price_netto =
      drive_5y_or_less *
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km);
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (input_years_ago.value < 5 && input_car_type.value == "standard") {
    var price_netto =
      drive_5y_or_less *
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km) *
      pay_more_for_standard;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * pay_more_for_standard * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (input_years_ago.value < 5 && input_car_type.value == "medium") {
    var price_netto =
      drive_5y_or_less *
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km) *
      pay_more_for_medium;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * pay_more_for_medium * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (
    input_years_ago.value < 5 &&
    input_years_ago.value >= 3 &&
    input_car_type.value == "premium"
  ) {
    var price_netto =
      drive_5y_or_less *
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km) *
      pay_more_for_premium;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * pay_more_for_premium * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (input_years_ago.value < 3 && input_car_type.value == "premium") {
    document.getElementById("line5").innerHTML =
      "Niestety samochód premium jest dla kierowców z wyższym stażem";
    var price_after_tax = "-";
    var price_netto = "-";
    document.getElementById("btn_disappear").innerHTML = " ";
  } else if (input_years_ago.value >= 5 && input_car_type.value == "basic") {
    var price_netto =
      (time / (1000 * 60 * 60 * 24)) * price_a_day +
      input_km.value * price_for_1km;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (input_years_ago.value >= 5 && input_car_type.value == "standard") {
    var price_netto =
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km) *
      pay_more_for_standard;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * pay_more_for_standard * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (input_years_ago.value >= 5 && input_car_type.value == "medium") {
    var price_netto =
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km) *
      pay_more_for_medium;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * pay_more_for_medium * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  } else if (input_years_ago.value >= 5 && input_car_type.value == "premium") {
    var price_netto =
      ((time / (1000 * 60 * 60 * 24)) * price_a_day +
        input_km.value * price_for_1km) *
      pay_more_for_premium;
    price_netto = Math.round(price_netto * 100) / 100;
    var price_after_tax = price_netto * pay_more_for_premium * vat;
    price_after_tax = Math.round(price_after_tax * 100) / 100;
  }
  document.getElementById("line1").innerHTML = "Dziękuję za informację!";
  document.getElementById("line2").innerHTML =
    " Cena netto wyniesie: " +
    price_netto +
    "zł" +
    ". Brutto natomiast: " +
    price_after_tax +
    "zł";
  document.getElementById("btn_disappear").innerHTML = " ";
  document.getElementById("line4").innerHTML =
    "Ilość dni wynajmowania samochodu: " + time / (1000 * 60 * 60 * 24);
}
