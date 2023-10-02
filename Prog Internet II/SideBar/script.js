function dropMenu() {
    let sideList = document.getElementById('side-list');

    if (sideList.style.display === 'none') {
        sideList.style.display = 'flex';
    } else {
        sideList.style.display = 'none';
    }

    for (let btnDrop of document.querySelectorAll ("#btn-dropdown p")) {
        if(btnDrop.style.rotate === '0deg'){
            btnDrop.style.rotate = '180deg';
        } else{
            btnDrop.style.rotate = '0deg';
        }
    }

}