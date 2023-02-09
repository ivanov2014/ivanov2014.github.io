
	import {readFileSync} from "fs";
	import {responseServer} from "./responseServer.js";
	import {getTypeFile} from "./getTypeFile.js";

	export function processingImgPage(url, response, typeFile)
		{
		console.log("функция processingImgPage");		
		let result =  readFileSync("."+url);
		responseServer(response, result, getTypeFile(typeFile));
		};