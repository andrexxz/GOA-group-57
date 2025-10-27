//1
function reverseLetter(str) {
	let alphabetcom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let finalword = '';

	for(let i = str.length - 1; i >= 0; i--){
		for(let a= 0; a <= alphabetcom.length - 1; a++){
			if(str[i] == alphabetcom[a]){
				finalword = `${finalword + str[i]}`;
			}
    }
	}
	return finalword;
}

//2
function maxMultiple(divisor, bound){
  var maximum = 0;
  for(let i = dvr; i <= bound; i++) {
    if(i % dvr == 0 && i > maximum) {
     maximum = i;
    }
  }
    return maximum;
    
  
}

//3
function vaporcode(string) {
  var array =[];
  for (var i=0; i<string.length; ++i)
    if (string[i]!=' ')
      array.push(string[i].toUpperCase());
  return array.join('  ');
}
