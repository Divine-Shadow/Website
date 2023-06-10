console.log('Script is running');
const expandButton = document.querySelector('#expandButton');
const fullList = document.querySelector('#fullList');

expandButton.addEventListener('click', function() {
    console.log('Button clicked');
    fullList.classList.toggle('expandable');
    fullList.classList.toggle('expanded');
});
