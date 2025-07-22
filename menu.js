function filterMenu() {
    let input = document.getElementById('search');
    let filter = input.value.toLowerCase();
    let menuItems = document.getElementsByClassName('menu-item');

    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        let text = item.textContent || item.innerText;
        item.style.display = text.toLowerCase().includes(filter) ? "" : "none";
    }
}

function filterCategory(category) {
    let menuItems = document.getElementsByClassName('menu-item');

    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
