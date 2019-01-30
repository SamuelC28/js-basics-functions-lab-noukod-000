
function distanceFromHqInBlocks(block){
  if (block > 42){
    return block - 42
    }
  else {
   return 42 - block
   }
 }
 function distanceFromHqInFeet(amountOfBlocks){
     return distanceFromHqInBlocks(amountOfBlocks) * 264;
 }

 function distanceTravelledInFeet (pointBlockA, pointBlockB){
     return pointBlockA > pointBlockB ? (pointBlockA - pointBlockB) * 264 : (pointBlockB - pointBlockA) * 264
  }
  function calculatesFarePrice (startBlock, endBlock){
      const numFeet = distanceTravelledInFeet(startBlock, endBlock)
      if (numFeet <= 400) {
          return 0;
        } else if (numFeet > 400 && numFeet <= 2000) {
          return 0.02 * (numFeet - 400);
        } else if (numFeet > 2000 && numFeet < 2500) {
          return 25;
        } else {
          return 'cannot travel that far';
      }
  }
