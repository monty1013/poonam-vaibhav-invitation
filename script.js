(() => {
const intro=document.getElementById("intro");
function closeIntro(){if(!intro||intro.classList.contains("opening"))return;intro.classList.add("opening");setTimeout(()=>{document.body.classList.remove("locked");intro.remove()},800)}
document.getElementById("openInvite")?.addEventListener("click",closeIntro);
document.getElementById("skipIntro")?.addEventListener("click",closeIntro);
const items=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});items.forEach(el=>obs.observe(el))}
else items.forEach(el=>el.classList.add("visible"));
const audio=document.getElementById("music"),toggle=document.getElementById("musicToggle"),label=document.getElementById("musicLabel");
toggle?.addEventListener("click",async()=>{if(audio.paused){try{await audio.play();label.textContent="Music on";toggle.setAttribute("aria-label","Pause background music")}catch(e){label.textContent="Add music.mp3"}}else{audio.pause();label.textContent="Music off";toggle.setAttribute("aria-label","Play background music")}});
})();