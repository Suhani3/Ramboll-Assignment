$(document).ready(()=>{
// Loading
$('#btn-submit').click(()=>{
  // console.log('save clicked');
  setTimeout(function(){
      window.location.href = "/index.html";
  },2000);
  $("#waitingDiv").show().delay(2000).fadeOut();
  
});
});
// 3-column animation
// Remove the transition class
const item = document.querySelector('.item');
item.classList.remove('item-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      item.classList.add('item-transition');
      return;
    }

    item.classList.remove('item-transition');
  });
});

observer.observe(document.querySelector('.item-wrapper'));
