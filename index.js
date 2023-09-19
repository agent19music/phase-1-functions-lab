// Code your solution in this file!
const hqAddress = 42;
let distance = 0;
let dropoff = 0;
let fare = 0;

function distanceFromHqInBlocks(pickup){
 if(pickup>=42) {distance = (pickup-hqAddress);
 }
 else if(pickup < 42 && pickup > 0){
    distance = hqAddress-pickup;
  }
 

 return distance;
}

function distanceFromHqInFeet(pickup,hqAddress){
 distance = distanceFromHqInBlocks(pickup)*264;
 return distance;
}

function distanceTravelledInFeet(pickup,dropoff){
   if(dropoff>=pickup) { distance = ((dropoff-pickup)*264);
   }
   else{distance =((pickup-dropoff)*264);

   }
   return distance;
}

function calculatesFarePrice(pickup,dropoff){
  if (distanceTravelledInFeet(pickup,dropoff) <= 400){
    fare = 0;
    return fare;
  }
  else if (distanceTravelledInFeet(pickup,dropoff) >400 && distanceTravelledInFeet(pickup,dropoff) <=2000 ){
      distance = distance-400;
      fare = distance*0.02;
      return fare;
    }
  

  else if  (distanceTravelledInFeet(pickup,dropoff) > 2000 && distanceTravelledInFeet(pickup,dropoff) < 2500){
      fare = 25;
      return fare;
  }
  
  else {
    fare = "cannot travel that far";
    return fare;
  }
  
}