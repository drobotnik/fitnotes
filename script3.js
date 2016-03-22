$('#button').click()

var data = 'call to get data from server or page';

var Record = function (rawLog) {
  this.rawLog = rawLog;
};

Record.prototype.poo = function(){
  console.log('poopoo');
  console.log(this.rawLog);
}

Record.prototype.drawHTMLTable = function(papaparseready){
  return true
}





var turd = new Record('123');
turd.poo();


var cunt = new Record('999');
cunt.poo();
