
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

 function distanceTravelledInFeet (startBlock, endBlock){
     return startBlock > endBlock ?
         (startBlock - endBlock) * 264 : (endBlock - startBlock) * 264
 }
