
	import {readFileSync} from "fs";

	export function checkRegistration(my_login, my_password)
		{
		console.log("функция checkRegistration");	
		return new Promise((resolve, reject)=>
			{
			let result = readFileSync("./users/usersLoginPassword/usersLoginPassword.json", "utf-8");
			let obj = JSON.parse(result);
			if(obj.length == 0)
				{
				resolve(true);
				}
			else
				{
				for(let i = 0; i < obj.length; i++)
					{
					if(my_login == obj[i].my_login)
						{
						resolve(false);
						break;
						};
					if(obj.length-1 == i)
						{
						resolve(true);	
						}
					};	
				};
	
			});
		};