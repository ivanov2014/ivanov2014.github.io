
	export function processingOnlyPostRequestAndResponseObj(request)
		{
		console.log("функция processingOnlyPostRequestAndResponseObj");	
		
		return new Promise((resolve,reject) => 
			{
			let body = "";
			request.on("data", chank=>
				{
				body += decodeURI(chank.toString());
				});
			request.on("end", ()=>
				{	
				resolve(body);
				});	
			});
		};