// Question: given two strings, need to write a method to decide if one is the permutation of the other.

//**************solution of the problem*************************

/*for one string to become the permutation of the other their length must be the same otherwise they cant be the
permutation to one another and return false， so we use this logic first to determine whether it is permutation or not*/

var isPermutation = function (str1,str2){
  if (str1.length !== str2.length){
    return false;
  }
  //for one string to become the permutation of the other string they should be same after the sorting is done on those.
  
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

isPermutation("joyade","adejoy");



