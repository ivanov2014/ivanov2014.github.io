
	import {readFileSync} from "fs";

	export function checkAuthorization(my_login, my_password)
		{
		console.log("функция checkAuthorization");	
		// console.log("login "+my_login);
		// console.log("password "+my_password);
		return new Promise((resolve, reject)=>
			{
			let result = readFileSync("./users/usersLoginPassword/usersLoginPassword.json", "utf-8");
			let obj = JSON.parse(result);
			// console.log(obj);
			for(let i = 0; i < obj.length; i++)
				{
				if(my_login == obj[i].my_login  && obj[i].my_password == my_password)
					{
					resolve(obj[i].url);
					break;
					};
				if(obj.length-1 == i)
					{
					resolve(false);	
					}
				};	
			});
		};