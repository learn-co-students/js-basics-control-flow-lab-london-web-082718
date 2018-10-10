// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = "This one is on me!"
  } else if (someValue > 2000 && someValue < 2500) {
    result = "I will gladly take your thirty bucks."
  } else {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(somePlace) {
  let result
  if (somePlace == 'NYC') {
    result = "Ok, sounds good."
  } else {
    result = "No go."
  }
  return result
}

function switchOnCharmFromTip(someTip) {
  let result
  if (someTip === 'generous') {
    result = "Thank you so much."
  } else if (someTip === 'not as generous') {
    result = "Thank you."
  } else {
    result = "Bye."
  }
  return result
}
