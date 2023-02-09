
	import {mkdir} from "fs";

	export function createFolder(inUrl)
		{
		console.log("функция createFolder");	
		mkdir("./users/userFolder/"+inUrl, err => 
			{
			if(err) throw err; // не удалось создать папку
			//console.log('Папка успешно создана');
			});
		};


		