// Code your solution in this file!

// function distanceFromHqInBlocks(pickupLocation){
//     return distanceFromHqInBlocks(scruberHq > ${pickupLocation} || scruberHq < ${pickupLocation} );
// }

const scruberHq = 42;

// Retruns a distance from Hq in Blocks
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(scruberHq - pickupLocation)
}
console.log(distanceFromHqInBlocks(10)+ " Blocks From HQ")

// Returns a distance from Hq in feet
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264;
  const distanceInFeet = blocks * feetPerBlock;
  return distanceInFeet;
}
console.log(distanceFromHqInFeet(10)+ " Feet from HQ")
// function distanceFromHqInFeet(someValue){
//     return distanceFromHqInBlocks(264 * ${someValue})
// },

// Returns distance traveled in Feet
function distanceTravelledInFeet(start, destination){
  const distanceInFeet = Math.abs(destination - start) * 264;
  return distanceInFeet;
  // return feetPerBlock * distanceTravelledInFeet(`${start}, ${destination}`);
}
console.log("You travelled " + distanceTravelledInFeet(42, 22)+ " Feet")


// Returns a free sample
function calculatesFarePrice(start, destination) {
  const feet = Math.abs(destination - start) * 264;

  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return  (feet - 400) * .02;
  } else if (feet > 2000 && feet <=2500) {
    return 25;
  } else if (feet >2500) {
    return 'cannot travel that far';
  }
}
console.log("That will be be " + calculatesFarePrice(42, 48))

// function calculateFarePrice(start,destination){
//     return numberOfFeetTraveled(feet)
//     if (feet <= 400) {
//         return "This one is on me!";
//     }else if (feet >400 && feet <2000){
//       return "That will be twenty bucks."
//     }else if (feet >2000 && feet <2500){
//       return "I will gladly take your thirty bucks."
//     } else if (feet >2500){
//       return "No can do."
//     }}