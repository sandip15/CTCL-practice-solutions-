/* problem 1.1
first challenge: we need to implement an algorithm to determine if a given string has all the unique characters.
second challenge: what if we are not allowed to use any additional data structure. */

//(alternate approach )solution using additional data structure to improve time complexity to 0(n)

var isUnique = function (s){
  var empty = []
  for (var i=0; i<s.length; i++){
    val = s[i];
    if (!empty[val]){
      empty[val] = true
    }else{
      return false
    }
  }
  return true;
}

isUnique('saandip')

//additional problem :  implement that without using any extra space?
/* solution without using the additional data structure 
but it has bad time complexity which is 0(n^2) */

var isUnique = function(s){
  for (var i=0 ; i<s.length ; i++){
    for (var j=i+1 ; j<s.length ; j++){
      if (s[i] === s[j]) return false
    }
  }
  return true;
}
isUnique('sandip')
