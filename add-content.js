var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = ' A boat is like a dog; it knows if you love it... Dan Schwieman ';
} else if (hourNow > 13) {
    greeting = ' The goal is not to sail the boat but rather to help the boat sail herself... John Rousmaniere ';
} else if (hourNow > 10) {
    greeting = ' A boat without captain cannot remain long on the surface... Mehmet Muratildan ';
} else if (hourNow > 6) {
    greeting = ' Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbour. Catch the trade winds in your sails. Explore! Dream! Discover!... Mark Twain ';
} else {
    greeting = 'Welcome!'
}
document.write('<h2>' + greeting + '</h2>')