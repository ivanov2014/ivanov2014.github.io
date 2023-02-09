	
	import {ridePageAndResponse} from "./ridePageAndResponse.js";
	import {parse} from "querystring";//разберает post запрос на объект
	import {processingOnlyPostRequestAndResponseObj} from "./processingOnlyPostRequestAndResponseObj.js";
	import {responseServer} from "./responseServer.js";
	import {generationUrl} from "./generationUrl.js";
	import {createFolder} from "./createFolder.js";
	import {saveDataRegistration} from "./saveDataRegistration.js";
	import {dateRegistration} from "./dateRegistration.js";	
	import {checkRegistration} from "./checkRegistration.js";
	
	export async function processingPostRequestRegistration(request, response)
		{
		console.log("функция processingPostRequestRegistration");	
		let resultObj = await processingOnlyPostRequestAndResponseObj(request);	
		let my_login = parse(resultObj).my_login;
		let my_password = parse(resultObj).my_password;	
		let chekReg = await checkRegistration(my_login, my_password);///////////////////создать функцию проверки наличия данных зарегистрированных пользователей
		if(chekReg)
			{
			let urlUser = await generationUrl();
			let date = await dateRegistration();
			await createFolder(urlUser);
			saveDataRegistration(my_login, my_password, urlUser, date, request.socket.remoteAddress, request.rawHeaders[request.rawHeaders.length-1].substring(0,2));
			let result = ridePageAndResponse("/authorization", "<br><p>Вы успешно зарегестрировались, авторизуйтесь!</p>");
			responseServer(response, result, "text/html; charset=utf-8");	
			}
		else
			{
			let result = ridePageAndResponse("/registration", "<br><p>Используйте другой логин для регистрации!</p>");
			responseServer(response, result, "text/html; charset=utf-8");
			}	
		}
	
