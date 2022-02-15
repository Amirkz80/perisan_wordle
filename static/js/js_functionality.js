// Javascript part of the game
// The game database is in this section, "Don't Cheat! ;)"

// Selects the first input and puts the cursor in the first input
document.getElementById("letter1").focus();
document.getElementById("letter1").select();

// a counter to count the game status and a counter to count the number of winnings
var game_counter = 0;
var win_counter = 0;

// the (only persian words) regex pattern
var regex = new RegExp(String.raw`[آ-ی]`);

// winner or loser flag
var winner = false;


// game words
let words = [
  "تنزیه",
  "آبتین",
  "فشرده",
  "چکیده",
  "حیوان",
  "اعراب",
  "آبانی",
  "فتاده",
  "انبار",
  "انگور",
  "باران",
  "باریک",
  "بنفشه",
  "تاختن",
  "رستان",
  "ترازو",
  "دزفول",
  "آبدست",
  "دستان",
  "دندان",
  "دهانی",
  "بدیده",
  "آئینه",
  "آورده",
  "تافته",
  "زرتشت",
  "آبادی",
  "ادیان",
  "آبرنگ",
  "آبریز",
  "ریزان",
  "آبخور",
  "خوردن",
  "کافور",
  "بستنی",
  "آبسته",
  "آبسرد",
  "آبشار",
  "فروشی",
  "تاتار",
  "آزردن",
  "رسیده",
  "کاسنی",
  "آبکشی",
  "کشیدن",
  "آزادی",
  "زرتاب",
  "زندگی",
  "افروز",
  "خرداد",
  "کشیده",
  "آبنوس",
  "آتیلا",
  "مرغان",
  "مژگان",
  "معدنی",
  "نارنج",
  "فارسی",
  "روزنه",
  "بهرام",
  "بیمار",
  "مخروط",
  "آوردن",
  "آهنگر",
  "نگران",
  "آهنگی",
  "آهنین",
  "مستان",
  "آذرخش",
  "آذرشب",
  "کیوان",
  "ذرمهر",
  "آذرنگ",
  "سالار",
  "سنگین",
  "آخرین",
  "آبگاه",
  "آبگذر",
  "آروین",
  "پارسی",
  "چرخان",
  "یافتن",
  "آتشگه",
  "آسمان",
  "نشانه",
  "اژرنگ",
  "اژدها",
  "سپیده",
  "پینزا",
  "انجیل",
  "پندار",
  "فروشی",
  "استخر",
  "ستاره",
  "استاد",
  "اسحاق",
  "استیک",
  "استیج",
  "نگبان",
  "چنبره",
  "گوران",
  "جنگلی",
  "فرنگی",
  "انکار",
  "روسیه",
  "کشیدن",
  "نهادن",
  "انگشت",
  "باختن",
  "اولاد",
  "ایلام",
  "ایراد",
  "افشان",
  "دیوان",
  "شریعت",
  "شمشیر",
  "اوصاف",
  "اوضاع",
  "پایین",
  "سربند",
  "گردان",
  "زکریا",
  "زندان",
  "آسیاب",
  "کفایت",
  "رنگین",
  "کرشمه",
  "باغچه",
  "اطفال",
  "ماندن",
  "کانال",
  "شکستن",
  "میمون",
  "خاتون",
  "خاتون",
  "یاران",
  "نزاکت",
  "زیارت",
  "آواره",
  "تازگی",
  "پرتاب",
  "پرپشت",
  "فولاد",
  "مهران",
  "بادام",
  "پریشب",
  "ارسال",
  "پژمان",
  "مقابل",
  "فشردن",
  "کرانه",
  "ارکان",
  "خمیدن",
  "پلیدی",
  "متحرک",
  "پلکان",
  "فردوس",
  "ورجان",
  "سلطان",
  "سنگین",
  "شوشتر",
  "برنجی",
  "ترویچ",
  "دونده",
  "تشابه",
  "سیمین",
  "تشخیص",
  "تشریف",
  "تشریح",
  "تصحیح",
  "تصادف",
  "تصاعد",
  "تمارض",
  "تماشا",
  "شاپور",
  "سادات",
  "توتون",
  "توپچی",
  "توبیخ",
  "پرویز",
  "تاریک",
  "خاموش",
  "خوردن",
  "خلاصه",
  "مطلقه",
  "خاصیت",
  "آسوده",
  "آشفته",
  "خاطره",
  "گیاهی",
  "سپردن",
  "بیزار",
  "پیاده",
  "سروری",
  "سامان",
  "سرهنگ",
  "ترازو",
  "تصویر",
  "چوبین",
  "استان",
  "رمیده",
  "روشنی",
  "زنبور",
  "زنجیر",
  "زندگی",
  "خرابی",
  "داماد",
  "درآمد",
  "درویش",
  "شاگرد",
  "شطرنج",
  "عطارد",
  "فانوس",
  "مورچه",
  "میرزا",
  "نیشکر",
  "شیانه",
  "میانه",
  "نزدیک",
  "خاوری",
  "طارمی",
  "خجالت",
  "بنیاد",
  "پرگار",
  "فرجام",
  "دوستی",
  "همراه",
  "خجسته",
  "اخوان",
  "اندام",
  "خوراک",
  "یافتن",
  "جاوید",
  "خیانت",
  "ارمان",
  "داوری",
  "ریختن",
  "میرزا",
  "طلایی",
  "روپوش",
  "بخاری",
  "گرامی",
  "سوخته",
  "روزبه",
  "تحویل",
  "قربان",
  "قیامت",
  "کفاره",
  "جوانی",
  "نجومی",
  "واقعه",
  "روستا",
  "روسری",
  "سیاهی",
  "فیروز",
  "روشنک",
  "روغنی",
  "کاریز",
  "زاویه",
  "منظور",
  "ریحان",
  "ستمگر",
  "ستوده",
  "گرفتن",
  "فاطمه",
  "سجاده",
  "جیران",
  "بلندی",
  "سرتیپ",
  "سربرگ",
  "برهنه",
  "بریده",
  "سرخاب",
  "جویان",
  "سرخوش",
  "زنبور",
  "بوران",
  "رخسار",
  "سردار",
  "شبگیر",
  "هنگام",
  "باران",
  "سواری",
  "ترشکن",
  "شرایط",
  "الماس",
  "حیوان",
  "مراکش",
  "صنعتی",
  "صندوق",
  "آهنین",
  "دوقلو",
  "نوبری",
  "رحمان",
  "معشوق",
  "سرطان",
  "امانت",
  "منابع",
  "مناصب",
  "مناظر",
  "منافذ",
  "مهندس",
  "قابوس",
  "قاجار",
  "قاصدک",
  "روانی",
  "حاجات",
  "قانون",
  "اساسی",
  "حسینی",
  "شیرین",
  "یعقوب",
  "مزرعه",
  "میدان",
  "شاملو",
  "قلقلک",
  "کرگدن",
  "کرمان",
  "کوروش",
  "غلیان",
  "قلیان",
  "پارگی",
  "آوازه",
  "بازار",
  "پیوند",
  "حادثه",
  "سلسله",
  "گدایی",
  "انجیر",
  "پرواز",
  "رفتار",
  "نمایه",
  "گردان",
  "طاعون",
  "گشودن",
  "گلابی",
  "گفتگو",
  "گفتنی",
  "گلبرگ",
  "محمدی",
  "گلرنگ",
  "گلزار",
  "نوروز",
  "شکسته",
  "چهارم",
  "تسلیم",
  "آوایی",
  "خردکن",
  "گوشتی",
  "آلوده",
  "نمناک",
  "گیتار",
  "کوهان",
  "دیدار",
  "دینار",
  "ماهیت",
  "روبان",
  "ایوان",
  "مایوس",
  "خرداد",
  "کشمیر",
  "مجروح",
  "مجسمه",
  "مجلسی",
  "بحرین",
];

// Create a random index between 0 and 364, and pick a random word from words array by using this index
let index = Math.floor(Math.random() * words.length);
let word = words[index];

// Opens twitter account window
function openTwitter() {
  window.open("https://twitter.com/IIAmirll?s=09");
  return 1;
}

// Reload the page
function reloadPage() {
  location.reload();
  return 1;
}

// A function to check if input letters are correct
function showLetterResult(beg, end) {
  if (regex.test(document.getElementById(`letter${end}`).value)) {
    var first = beg;
    result = [];
    losing_message =
      " شما باختید" + " 😩 " + "کلمه چیزی نبود به جز" + " : " + word;

    for (beg; beg <= end; beg++) {
      var input_id = "letter" + beg.toString();
      var letter = document.getElementById(input_id).value;

      if (word[beg - first] == letter) {
        document.getElementById(input_id).style.backgroundColor = "green";
        result.push(1);
      } else if (word.includes(letter)) {
        document.getElementById(input_id).style.backgroundColor = "#dca800";
      } else {
        document.getElementById(input_id).style.backgroundColor = "gray";
      }
    }

    // If user inputs the correct answer then end the game and ask if he wants to play again
    if (
      result.length == 5 &&
      result[0] == 1 &&
      result[1] == 1 &&
      result[2] == 1 &&
      result[3] == 1 &&
      result[4] == 1
    ) {
      winner = true;
      win_counter += 1;
      document.getElementById("winCount").innerHTML = win_counter.toString();
      alert("تو برنده شدی 🥳🎉");
      newGameAlert();
      return 1;
    }

    // If user took all of his chances then declare that the user failed and end the program
    if (end == 30) {
      alert(losing_message);
      newGameAlert();
      return 1;
    }
  } else {
    document.getElementById(`letter${end}`).value = "";
  }
}

// A function to disable last input and enable next one
function jumpOneInput(field, autoMove) {
  if (regex.test(field.value)) {
    // Disabling last input
    field.disabled = true;

    if (field.value.length == 1 && winner == false) {
      // Enabling next
      document.getElementById(autoMove).disabled = false;
      document.getElementById(autoMove).focus();
    }
  } else {
    //alert("لطفا حروف فارسی وارد کنید !");
    field.value = "";
  }

  return 1;
}

// New game alert function
function newGameAlert() {
  // Increase game counter
  game_counter += 1;
  document.getElementById("gameCount").innerHTML = game_counter.toString();

  // If user decides to play again, change game status, pops out the word from list and
  if (confirm("🎮 مایل به بازی مجدد هستی ؟") && words.length - 1 > 0) {
    winner = false;

    for (input = 1; input <= 30; input++) {
      // clear all input fileds and foucus on the first input
      document.getElementById(`letter${input}`).disabled = true;
      document.getElementById(`letter${input}`).value = "";
      document.getElementById(`letter${input}`).style.backgroundColor =
        "#140e0e";
    }

    document.getElementById("letter1").disabled = false;
    document.getElementById("letter1").focus();

    // Pop out the word from words list
    words.splice(index, 1);

    // Create a random index between 0 and 364, and pick a random word from words array by using this index
    index = Math.floor(Math.random() * words.length);
    word = words[index];
  }

  // End the game if the user doesn't want to play or the words is out of words
  else {
    // Disabling all the input fields if user didn't want to play anymore
    for (input = 1; input <= 30; input++) {
      document.getElementById(`letter${input}`).disabled = true;
    }
  }

  return 1;
}
