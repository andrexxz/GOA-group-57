//1
function checkExam(array1, array2) {
 var score = 0;
   for (var i = 0; i < array2.length; i++){
       if (array2[i] === ""){
          score += 0
       } else if (array1[i] === array2[i]){
           score += 4
       } else if (array1[i] !== array2[i]){
          score -= 1
       }
   } 
     if (score >= 0){
       return score;
     } else {
       return 0
     }
}


//2
function rowWeights(array){
  var team0 = 0;
  var team1 = 0;
  array.forEach(function(element,index) {
    if(index % 2 == 0){
      team0 += element;
    }else{
      team1 += element;
    }
  });
  return [team0, team1];
}