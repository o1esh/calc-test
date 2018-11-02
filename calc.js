function doCalc() {
      var str = document.getElementById("input-text").value;
      var fact = fact(str);
       document.getElementById("input-text").value = fact
       function fact(x){
         return x!=1 ? x*(fact(x-1)) : 1;
       }
}
