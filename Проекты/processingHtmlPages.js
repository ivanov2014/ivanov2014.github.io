	
	import {ridePageAndResponse} from "./ridePageAndResponse.js";
	import {responseServer} from "./responseServer.js";

	export function processingHtmlPages(url, response)
		{
		console.log("функция processingHtmlPages");	
		let page;
		if(url == "/")
			{
			page = "/index";
			}
		else
			{
			page = url;
			}
		let result = ridePageAndResponse(page);	
		responseServer(response, result, "text/html; charset=utf-8");
		}