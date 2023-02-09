
	import {readFileSync} from "fs";

	export function ridePageAndResponse(page, data)
		{
		console.log("функция ridePageAndResponse");		
		let ridePaternPage =  readFileSync("./paternForPage/index.html", "utf-8");
		let title =  readFileSync("./pages"+page+"/title.html");
		let body =  readFileSync("./pages"+page+"/body.html");
		ridePaternPage = ridePaternPage.replace(/\{\{title\}\}/g, title);
		if(data)
			{
			ridePaternPage = ridePaternPage.replace(/\{\{body\}\}/g, body + data);
			}
		else
			{
			ridePaternPage = ridePaternPage.replace(/\{\{body\}\}/g, body);	
			}
		return ridePaternPage;
		}
