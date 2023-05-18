function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;



const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year} CABA Chamber | Lucas Vallejos | WDD 230 Project | Last modification: ${document.lastModified}`;
 

const el = document.querySelector("footer");
el.innerHTML = msg;