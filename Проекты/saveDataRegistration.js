
	import {writeFileSync, readFileSync} from "fs";

	export function saveDataRegistration(my_login, my_password, idUrl, date, ip, language)
		{
		let newPage = readFileSync("./users/usersLoginPassword/usersLoginPassword.json", "utf-8");
		let arr = JSON.parse(newPage);
		arr.push({my_login:my_login, my_password:my_password, url:idUrl});
		writeFileSync("./users/usersLoginPassword/usersLoginPassword.json", JSON.stringify(arr));
		writeFileSync("./users/userFolder/"+idUrl+"/login.html", my_login);
		writeFileSync("./users/userFolder/"+idUrl+"/password.html", my_password);	
		writeFileSync("./users/userFolder/"+idUrl+"/idUrl.html", idUrl);	
		writeFileSync("./users/userFolder/"+idUrl+"/date.html", date);	
		writeFileSync("./users/userFolder/"+idUrl+"/dataDelivery.html", "");
		writeFileSync("./users/userFolder/"+idUrl+"/ip.html", ip);
		writeFileSync("./users/userFolder/"+idUrl+"/language.html", language);
		};