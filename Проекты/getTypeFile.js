
	export function getTypeFile(type)
		{
		let obj = 
			{
			// "html":"text/html; charset=utf-8",
			// "css":"text/css; charset=utf-8",
			// "js":"text/javascript; charset=utf-8",
			".png":"image/png",
			".ico":"image/ico",
			".jpg":"image/jpg",
			".jpeg":"image/jpeg"
			};
			
		for(let i in obj)
			{
			if(i == type)
				{
				return obj[i];
				break;
				};
			};
		};