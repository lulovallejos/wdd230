const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year}  | Lucas Vallejos | Buenos Aires, Argentina<br/>
<b>Last Updated: </b>${document.lastModified}`;

const el = document.querySelector("footer");
el.innerHTML = msg;