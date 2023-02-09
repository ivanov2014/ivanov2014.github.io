
	import {processingGetRequestWithParametrRequest} from "./processingGetRequestWithParametrRequest.js";
	import {processingHtmlPages} from "./processingHtmlPages.js";
	import {processingCssPage} from "./processingCssPage.js";
	import {processingErrors} from "./processingErrors.js";
	import {processingJsPage} from "./processingJsPage.js";
	import {processingImgPage} from "./processingImgPage.js";

	export function processingGetRequest(url, response)
		{
		console.log("функция processingGetRequest");	
		let typeFile = url.substr(url.indexOf('.'));	
		if(/\?/g.test(url))
			{
			processingGetRequestWithParametrRequest(url, response);
			}
		else if(!/\./g.test(url))
			{
			processingHtmlPages(url, response);
			}	
		else if(/\./g.test(url))
			{
			if(typeFile == ".js")
				{
				processingJsPage(url, response);	
				}
			if(typeFile == ".css")
				{
				processingCssPage(url, response);	
				}
			if(typeFile == ".png" || typeFile == ".jpg" || typeFile == ".jpeg" || typeFile == ".ico" )
				{
				processingImgPage(url, response, typeFile);	
				}
			}	
		else
			{
			processingErrors(url, response);
			}
		}