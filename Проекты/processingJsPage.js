
	import {readFileSync} from "fs";
	import {responseServer} from "./responseServer.js";

	export function processingJsPage(url, response)
		{
		console.log("функция processingJsPage");		
		let result =  readFileSync("."+url, "utf-8");
		responseServer(response, result, "text/javascript; charset=utf-8");
		};