		
	import {processingPostRequestRegistration} from "./processingPostRequestRegistration.js";
	import {processingPostRequestAuthorization} from "./processingPostRequestAuthorization.js";
	import {processingPostRequestDataDelivery} from "./processingPostRequestDataDelivery.js";	
	
	export function processingPostRequest(request, response)
		{
		console.log("функция processingPostRequest");	
		if(request.url == "/registration")	
			{
			processingPostRequestRegistration(request, response);
			}
		if(request.url == "/authorization")	
			{
			processingPostRequestAuthorization(request, response);
			}
		if(request.url == "/dataDelivery")	
			{
			processingPostRequestDataDelivery(request, response);
			}			
		};
