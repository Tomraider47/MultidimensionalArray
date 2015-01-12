function links(){
	var array = [
		["Nu", "http://www.nu.nl"],
		["Meewezen", "http://www.meewezen.nl"],
		["IDCollege", "http://www.idcollege.nl"],
		["Microsoft", "http://www.microsoft.nl"],
		["De Telegraaf", "http://www.telegraaf.nl"]
		]
for (var i = 0; i < array.length; i++ ) {
	document.write("<a href=" + array[i][1] + ">" + array[i][0] + "<br>")
};
//test
}
