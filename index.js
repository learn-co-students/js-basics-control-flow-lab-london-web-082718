// Write your code in this file!
function scuberGreetingForFeet(value) {
    //this is where we can use conditionals given our argument, someValue
    //don't forget to return whatever the result is!
    let greeting;
    if (value <= 400) {
        greeting = "This one is on me!";
    }
    else if (value > 1999 && value < 2500){
        greeting = "I will gladly take your thirty bucks.";
    }
    else {
        greeting = "No can do.";
    }
    return greeting;
  }

  function ternaryCheckCity(city) {
    let greeting;
    if (city === "NYC"){
        greeting = "Ok, sounds good.";
    }
    else {
        greeting = "No go.";
    }
    return greeting;
  }

  function switchOnCharmFromTip(tip){
      let greeting;
      if (tip === "generous"){
          greeting = "Thank you so much.";
      }
      else if (tip === "not as generous"){
          greeting = "Thank you."
      }
      else {
          greeting = "Bye."
      }
      return greeting;

  }