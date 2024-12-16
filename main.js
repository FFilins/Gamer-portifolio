function changeTab( event ) {
    const element = event.currentTarget;
    const selectedElement = document.getElementsByClassName('active')[0];
    if(selectedElement !== element) {      // verifica os estados dos componentes
        selectedElement.classList.remove('active');
        element.classList.add('active');


        const selectedTab = document.getElementsByClassName('tab-active')[0];
        const newTab = document.getElementById(element.id + '-tab')

        selectedTab.classList.remove('tab-active');
        newTab.classList.remove('hide');
        setTimeout( () => {      // impede a troca de ser instantânea 
            selectedTab.classList.add('hide');
            newTab.classList.add('tab-active');
        }, 100)
    }
    
}

