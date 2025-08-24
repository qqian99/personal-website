function toggleNav(){
  const sb = document.querySelector('.sidebar');
  if(!sb) return;
  if (sb.style.display === 'none'){ sb.style.display = 'block'; }
  else { sb.style.display = 'none'; }
}