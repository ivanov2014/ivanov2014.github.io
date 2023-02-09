
	import {processingOnlyPostRequestAndResponseObj} from "./processingOnlyPostRequestAndResponseObj.js";
	import {parse} from "querystring";//разберает post запрос на объект
	import {writeFileSync, readFileSync, appendFileSync} from "fs";
	import {rideFolderUserAndData} from "./rideFolderUserAndData.js";
	import {responseServer} from "./responseServer.js";	
	
	export async function processingPostRequestDataDelivery(request, response)
		{
		console.log("функция processingPostRequestDataDelivery");		
		let resultObj = await processingOnlyPostRequestAndResponseObj(request);	
		let obj = parse(resultObj);
		console.log(obj);
		writeFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html", "");
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Фамилия: ${obj.surname}</p>`);
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Имя: ${obj.firstName}</p>`);
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Отчество: ${obj.patronymic}</p>`);	
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Страна: ${obj.country}</p>`);
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Регион: ${obj.region}</p>`);
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Город: ${obj.city}</p>`);
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Улица, дом, корпус, квартира: ${obj.street}</p>`);
		appendFileSync("./users/userFolder/"+obj.idUrl+"/dataDelivery.html",`\n<p>Индекс: ${obj.zipcode}</p>`);		
		let result = await rideFolderUserAndData(obj.idUrl);
		responseServer(response, result, "text/html; charset=utf-8");

		}
