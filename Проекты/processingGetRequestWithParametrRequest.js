
	import {parse} from "url";
	import {processingGetRequestEntryPersonalAccount} from "./processingGetRequestEntryPersonalAccount.js";

	export function processingGetRequestWithParametrRequest(url, response)
		{
		console.log("функция processingGetRequestWithParametrRequest");	
		let res = parse(url, true);	
		if(res.pathname == "/authorization")
			{
			processingGetRequestEntryPersonalAccount(res, response)	
			};
		};