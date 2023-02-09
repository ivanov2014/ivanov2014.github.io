
	import {ridePageAndResponse} from "./ridePageAndResponse.js";
	import {parse} from "querystring";//разберает post запрос на объект
	import {processingOnlyPostRequestAndResponseObj} from "./processingOnlyPostRequestAndResponseObj.js";
	import {responseServer} from "./responseServer.js";	
	import {checkAuthorization} from "./checkAuthorization.js";
	import {rideFolderUserAndData} from "./rideFolderUserAndData.js";	
	
	export async function processingPostRequestAuthorization(request, response)
		{
		console.log("функция processingPostRequestAuthorization");		
		let resultObj = await processingOnlyPostRequestAndResponseObj(request);	
		let my_login = parse(resultObj).my_login;
		let my_password = parse(resultObj).my_password;;		
		let urlUser = await checkAuthorization(my_login, my_password);
		if(urlUser)
			{
			let result = await rideFolderUserAndData(urlUser);
			responseServer(response, result, "text/html; charset=utf-8");
			}
		else
			{
			let result = ridePageAndResponse("/authorization", "<br><p>Неверно введен логин или пороль!</p>");
			responseServer(response, result, "text/html; charset=utf-8");
			}
		}