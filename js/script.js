function addHamburgerMenuEventListener(){
    addEventListener("resize",resetNavigation);
    document.getElementById("hamburger-menu").addEventListener("click",toggleNavigation);
}

function toggleNavigation(){
    const mainNavigation=document.getElementById("main-navigation");
    const mainNavigationCssDisplay=window.getComputedStyle(mainNavigation).display;
    if(mainNavigationCssDisplay==="none"){
        mainNavigation.style.display="block";
    }
    else{
        mainNavigation.style.display="none";
    }
}

function resetNavigation(){
    const minWidth=1250;
    const mainNavigation=document.getElementById("main-navigation");
    const mainNavigationCssDisplay=window.getComputedStyle(mainNavigation).display;
    //smaller screen
    if(window.innerWidth<minWidth){
        if(mainNavigationCssDisplay!=="none"){
            mainNavigation.style.display="none";
        }
    }
    //larger screen
    else{
        if(mainNavigationCssDisplay==="none"){
            mainNavigation.style.display="block";
        }
    }
}

addHamburgerMenuEventListener();