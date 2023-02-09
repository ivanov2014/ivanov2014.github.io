
	import {readFileSync} from "fs";
	import {responseServer} from "./responseServer.js";

	export function processingCssPage(url, response)
		{
		console.log("функция processingCssPage");		
		let result =  readFileSync("."+url, "utf-8");
		responseServer(response, result, "text/css; charset=utf-8");
		};