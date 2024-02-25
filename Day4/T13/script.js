function changeTab(tabIndex) {
    let tabs = document.getElementsByClassName("tab");
    let buttons = document.getElementsByClassName("tab-button");

    for (let i = 0; i < tabs.length; ++i) {
        tabs[i].classList.remove("active-tab");
    }

    tabs[tabIndex].classList.add("active-tab");

    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].style.backgroundColor = i === tabIndex ? "#fff" : "#f3f88b";
    }
}