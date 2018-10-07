// Write your code in this file!
function scuberGreetingForFeet(someValue) {

  let expect;

  if (someValue <= 400) {
    expect = 'This one is on me!'
  } else if (someValue > 400  && someValue <= 2500 ) {
    expect = 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500 ) {
    expect = 'No can do.'
  }
  return expect
}


function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {

  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }

}
