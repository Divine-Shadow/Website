
    function handleExpandButtonClick() {
    console.log('Button clicked');
    const fullList = document.querySelector('#fullList');
    fullList.classList.toggle('expandable');
    fullList.classList.toggle('expanded');
}

    window.onload = function() {
    console.log('Script is running');
    const expandButton = document.querySelector('#expandButton');
    expandButton.onclick = handleExpandButtonClick;
};

