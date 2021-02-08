var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}

var valor1 = dollarToEuro (137,0.89);
var valor2 = euroToYen (121.93,124.15)

console.log(valor2)