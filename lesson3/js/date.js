const today = new Date();
const year = today.getFullYear();
const msg = `&copy; <b> ${year}  | Lucas Vallejos | Buenos Aires, Argentina </b><br/> 
Last Updated: ${document.lastModified}`;

const el = document.querySelector("footer");
el.innerHTML = msg;