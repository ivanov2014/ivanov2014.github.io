
	export function responseServer(response, result, type)
		{
		console.log("функция responseServer");		
		response.statusCode = 200;
		response.setHeader("Content-Type", type);
		response.write(result);
		response.end();	
		};