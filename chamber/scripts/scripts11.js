const hamButton = document.getElementById('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});



const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year} |Lucas Vallejos| WDD 230 | Argentina<br/>
Last modified: ${document.lastModified}`;

const el = document.querySelector("footer");
el.innerHTML = msg;