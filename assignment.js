//1st problem solution

function kilometerToMeter ( kilo ) {

    var result = kilo * 1000 ;
     return result;
}


//2nd problem solution

function budgetCalculator (watch , phone , laptop ) {

     var firstProduct = watch * 50;

     var secondProduct = phone * 100 ;

     var thirdProduct = laptop * 500 ;

     var totalCost = (firstProduct + secondProduct + thirdProduct);

     return totalCost;
}


//3rd problem solution

function hotelCost (days) {

     var roomCost = 0;

     if (days <= 10) {
     
     roomCost = days *100;

     }
     
     else if (days <= 20) {
          
          var firstPart = 10 * 100 ;

          var remaining = days -10 ;

          var secondPart =remaining * 80 ;

          var roomCost = firstPart + secondPart ;
     }

     else {
          var firstPart = 10 * 100 ;

          var secondPart = 10 * 80 ;

          var remaining = days - 20;
           
          var thirdPart = remaining * 50 ; 

          var roomCost = firstPart + secondPart + thirdPart ;
     }

     return roomCost;

}

//4rd problem solution

function megaFriend (myFriends){

     var penFriend = myFriends[0];

     for (var i=0 ; i < myFriends.length ; i++ ) {
           
          if ( myFriend[i].length > penFriend.length)   {

               penFriend = myFriends[i]
          }
     }

     return penFriend;

}



     

 