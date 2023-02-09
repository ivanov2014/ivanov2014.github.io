
	export function dateRegistration()
		{
		console.log("функция dateRegistration");	
		return new Promise((resolve, reject)=>
			{
			let date = new Date();
			let minutes = date.getMinutes(); //минуты
			let hours = date.getHours(); //часы
			let day = date.getDate(); //дни
			let month = date.getMonth()+1; //месяцы возвращает с нуля! январь 0 месяц
			let fullYear = date.getFullYear(); //год
			date = hours+":"+minutes+" "+day+"/0"+month+"/"+fullYear;
			resolve(date);	
			});
		}