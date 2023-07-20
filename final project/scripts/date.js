// Copyright //
const copyrightDate = new Date(document.lastModified);
document.getElementById('copyright')
	.innerHTML = '©' + copyrightDate.getFullYear() +
	' Bountiful Foods';


// last modification //
document.getElementById('last-modified')
	.innerText = 'Last modification: '
	+ document.lastModified;

const copyrightLine = '©' + copyrightDate.getFullYear()
	+ 'Bountiful Foods | Lucas Vallejos | WDD 230 final project '
	+ '| ' + document.lastModified + ' '
	+ `| Weather Provided by <a href=\"https://openweathermap.org/\\">OpenWeatherMap </a>`;

document.getElementById('copyright-line')
	.innerHTML = copyrightLine;