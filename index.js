
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
     return pointBlockA > pointBlockB ?
    (pointBlockA - pointBlockB) * 264 : (pointBlockB - pointBlockA)
  }
