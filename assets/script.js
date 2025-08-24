function toggleNav(){
  const sb = document.querySelector('.sidebar');
  if(!sb) return;
  if (getComputedStyle(sb).display === 'none'){ sb.style.display = 'block'; }
  else { sb.style.display = 'none'; }
}