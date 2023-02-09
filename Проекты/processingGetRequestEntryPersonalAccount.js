
	import {checkAuthorization} from "./checkAuthorization.js";
	import {rideFolderUserAndData} from "./rideFolderUserAndData.js";
	import {responseServer} from "./responseServer.js";

	export async function processingGetRequestEntryPersonalAccount(res, response)
		{
		console.log("функция processingGetRequestEntryPersonalAccount");	
		let my_login = res.query.my_login;
		let my_password = res.query.my_password;
		let urlUser = await checkAuthorization(my_login, my_password);
		let result = await rideFolderUserAndData(urlUser);
		responseServer(response, result, "text/html; charset=utf-8");
		}