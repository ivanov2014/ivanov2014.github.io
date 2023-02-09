	
	import {readFileSync} from "fs";
	
	export function rideFolderUserAndData(idUrl)
		{
		console.log("функция rideFolderUserAndData");		
		return new Promise((resolve, reject)=>
			{
			let ridePaternPage =  readFileSync("./paternForPage/userPersonalAccount.html", "utf-8");	
			let urlUser =  readFileSync("./users/userFolder/"+idUrl+"/idUrl.html");
			let login =  readFileSync("./users/userFolder/"+idUrl+"/login.html");
			let password =  readFileSync("./users/userFolder/"+idUrl+"/password.html");
			let date =  readFileSync("./users/userFolder/"+idUrl+"/date.html");
			let dataDelivery =  readFileSync("./users/userFolder/"+idUrl+"/dataDelivery.html");	
			let ip =  readFileSync("./users/userFolder/"+idUrl+"/ip.html");
			let language =  readFileSync("./users/userFolder/"+idUrl+"/language.html");
			
			ridePaternPage = ridePaternPage.replace(/\{\{title\}\}/g, urlUser);
			ridePaternPage = ridePaternPage.replace(/\{\{login\}\}/g, login);
			ridePaternPage = ridePaternPage.replace(/\{\{password\}\}/g, password);
			ridePaternPage = ridePaternPage.replace(/\{\{idUrl\}\}/g, urlUser);
			ridePaternPage = ridePaternPage.replace(/\{\{date\}\}/g, date);
			ridePaternPage = ridePaternPage.replace(/\{\{ip\}\}/g, ip);
			ridePaternPage = ridePaternPage.replace(/\{\{language\}\}/g, language);
			ridePaternPage = ridePaternPage.replace(/\{\{dataDelivery\}\}/g, dataDelivery);
			
			resolve(ridePaternPage);	
			});
		}