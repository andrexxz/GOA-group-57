//2)

function counterEffect(str) {
	var outpt = [];
	for (var i = 0; i < str.length; i++) {
		var temp = [];
		for (var j = 0; j <= Number(str[i]); j++) {
			temp.push(j);
		} outpt.push(temp);
	} return outpt;
}

//4)

function killcount(counselors, jason){
  var ar = []
  for (var i = 0; i < counselors.length; i++){
    if (counselors[i][1] < jason) {
      ar.push(counselors[i][0])
    }
  }
  return ar;
}
