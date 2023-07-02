/*temp = document.querySelector(".temp");
temperature = 33;
t = 5;
s = 3;
document.querySelector("#speed").textContent = s;
temp.textContent = `${temperature} F`;
windchill = (35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));

if (temperature <= 50 && s >= 3) {
    windchill = Math.round(windchill);
} else {
    windchill = `Windchill: N/A`;
}



chill = document.querySelector(".windchill");
chill.textContent = `Windchill: ${windchill}`;
*/

Weather

async function getWeather()
{
    let url = "https://api.openweathermap.org/data/2.5/weather?lat={-34.6132}&lon={-58.3772}&appid={412fa995add7863b5fd34967d16fbb25}"

    let res = await fetch(url);
    let weather = await res.json();

	let temp =  weather['current']['temp_c'];
	let temp2 =  weather['current']['temp_f'];
	let condition = weather['current']['condition'];
	let speed = weather['current']['wind_kph'];
	let speed2 = weather['current']['wind_mph'];
	let chill = weather['current']['feelslike_c'];
	let chill2 = weather['current']['feelslike_f'];
	let words = condition['text'].split(" ");
	let condition_text = '';
	words.forEach(element => {
		let e = element.charAt(0).toUpperCase() + element.slice(1);
		condition_text = condition_text + e + " ";
	});
	document.getElementById('temperature').textContent = temp + ' °C / ' + temp2 + ' °F';
	document.getElementById('condition-img').src = condition['icon'];
	document.getElementById('condition-text').innerText = condition_text;
	document.getElementById('wind-speed').innerText = 'Wind Speed: ' + speed + ' km/h / ' + speed2 + ' mi/h';
	document.getElementById('wind-chill').innerText = 'Wind Chill: ' + chill + '°C / ' + chill2 + ' °F';
	let t = temp2; // this is the current temperature in farenheit
	let s = speed2; // this is the current wind speed in miles per hour
	if (temp2 < 50 && speed2 > 3.0) {
		let f = 35.74 + 0.6215*t - 35.75*Math.pow(s, 0.16) + 0.4275*t*Math.pow(s, 0.16); // this is our function to express the wind chill in farenheit
		let c = ((f - 32) * 5/9); // its value in celsius
		document.getElementById('wind-chill').innerText = 'Wind Chill: ' + Math.round((c + Number.EPSILON) * 100) / 100 + '°C / ' + Math.round((f + Number.EPSILON) * 100) / 100 + ' °F';
    } else {
        document.getElementById('wind-chill').innerText = 'Wind Chill: N/A';
    };
}

getWeather()
