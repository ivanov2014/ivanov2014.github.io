
	export function generationUrl()
		{
		console.log("функция generationUrl");		
		return new Promise((resolve,reject) => 
			{	
			let urlGeneration = "";
			for(let i = 0; i<11; i++)
				{
				urlGeneration += Math.floor(Math.random() * (9 - 0) + 0); 	
				}
			resolve(urlGeneration);
			});
		};