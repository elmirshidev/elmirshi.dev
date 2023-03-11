const hammenu = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menubar')
const closemenu = document.querySelector('.close-ham')
const bgtext = document.querySelector('.bg-text')

const home = document.querySelector('.home')
const about = document.querySelector('.about')
const portfolio = document.querySelector('.portfolio')
const contact = document.querySelector('.contacta')

const gear = document.querySelector('.gear')
const changer = document.querySelector('.color_changer')
const color = document.querySelectorAll('.color')
const rengs = document.querySelectorAll('.reng')
const bgcolor = document.querySelectorAll('.bg-color')

const root = document.querySelector(':root');
const colorroot = getComputedStyle(root).getPropertyValue('--color');
gear.addEventListener('click' , e=>{
    changer.classList.toggle('changer_new')
})

color.forEach( c => {
    rengs[0].addEventListener('click' , e=>{
        c.classList.remove('color')
        c.classList.remove('color2')
        c.classList.remove('color3')
        c.classList.remove('color4')
        c.classList.remove('color5')
        c.classList.remove('color6')

        c.classList.add('color1')
        root.style.setProperty('--color' , '#c70039')
    })
    rengs[1].addEventListener('click' , e=>{
        c.classList.remove('color')
        c.classList.remove('color1')
        c.classList.remove('color3')
        c.classList.remove('color4')
        c.classList.remove('color5')
        c.classList.remove('color6')
        c.classList.add('color2')
        root.style.setProperty('--color' , '#481380')
    })
    
    rengs[2].addEventListener('click' , e=>{
        c.classList.remove('color')
        c.classList.remove('color1')
        c.classList.remove('color2')
        c.classList.remove('color4')
        c.classList.remove('color5')
        c.classList.remove('color6')
        c.classList.add('color3')
        root.style.setProperty('--color' , '#00909e')
    })
    
    rengs[3].addEventListener('click' , e=>{
        c.classList.remove('color')
        c.classList.remove('color1')
        c.classList.remove('color3')
        c.classList.remove('color2')
        c.classList.remove('color5')
        c.classList.remove('color6')
        c.classList.add('color4')
        root.style.setProperty('--color' , '#04A777')
    })
    
    rengs[4].addEventListener('click' , e=>{
        c.classList.remove('color')
        c.classList.remove('color1')
        c.classList.remove('color3')
        c.classList.remove('color4')
        c.classList.remove('color2')
        c.classList.remove('color6')
        c.classList.add('color5')
        root.style.setProperty('--color' , '#035aa6')
    })
    
    rengs[5].addEventListener('click' , e=>{
        c.classList.remove('color')
        c.classList.remove('color1')
        c.classList.remove('color3')
        c.classList.remove('color4')
        c.classList.remove('color5')
        c.classList.remove('color2')
        c.classList.add('color6')
        root.style.setProperty('--color' , '#dd7631')
    })
    
})
bgcolor.forEach(bc =>{
    rengs[0].addEventListener('click' , e=>{
        bc.classList.remove('bgcolor')
        bc.classList.remove('bgcolor2')
        bc.classList.remove('bgcolor3')
        bc.classList.remove('bgcolor4')
        bc.classList.remove('bgcolor5')
        bc.classList.remove('bgcolor6')

        bc.classList.add('bgcolor1')
    })
    rengs[1].addEventListener('click' , e=>{
        bc.classList.remove('bgcolor')
        bc.classList.remove('bgcolor1')
        bc.classList.remove('bgcolor3')
        bc.classList.remove('bgcolor4')
        bc.classList.remove('bgcolor5')
        bc.classList.remove('bgcolor6')

        bc.classList.add('bgcolor2')
    })
    
    rengs[2].addEventListener('click' , e=>{
        bc.classList.remove('bgcolor')
        bc.classList.remove('bgcolor2')
        bc.classList.remove('bgcolor1')
        bc.classList.remove('bgcolor4')
        bc.classList.remove('bgcolor5')
        bc.classList.remove('bgcolor6')

        bc.classList.add('bgcolor3')
    })
    
    rengs[3].addEventListener('click' , e=>{
        bc.classList.remove('bgcolor')
        bc.classList.remove('bgcolor2')
        bc.classList.remove('bgcolor3')
        bc.classList.remove('bgcolor1')
        bc.classList.remove('bgcolor5')
        bc.classList.remove('bgcolor6')

        bc.classList.add('bgcolor4')
    })
    
    rengs[4].addEventListener('click' , e=>{
        bc.classList.remove('bgcolor')
        bc.classList.remove('bgcolor2')
        bc.classList.remove('bgcolor3')
        bc.classList.remove('bgcolor4')
        bc.classList.remove('bgcolor1')
        bc.classList.remove('bgcolor6')

        bc.classList.add('bgcolor5')
    })
    
    rengs[5].addEventListener('click' , e=>{
        bc.classList.remove('bgcolor')
        bc.classList.remove('bgcolor2')
        bc.classList.remove('bgcolor3')
        bc.classList.remove('bgcolor4')
        bc.classList.remove('bgcolor5')
        bc.classList.remove('bgcolor1')

        bc.classList.add('bgcolor6')
    })
    
})




document.addEventListener('keydown' , e=>{
    if (e.code == "KeyM" && menu.classList.contains('menubar2') == false ) {
        menu.classList.add('menubar2')
    } else {
        menu.classList.remove('menubar2')
    }
     
})

hammenu.addEventListener('click' , e => {
   menu.classList.add('menubar2')
   
})

closemenu.addEventListener('click' , e=> {
    menu.classList.remove('menubar2')
})


home.addEventListener("mouseover" , e => {
    bgtext.innerHTML = 'HOME'
    
})
home.addEventListener("mouseout" , e => {
    bgtext.innerHTML = ''
    
})


about.addEventListener("mouseover" , e => {
    bgtext.innerHTML = 'ABOUT'
})
about.addEventListener("mouseout" , e => {
    bgtext.innerHTML = ''
})



portfolio.addEventListener("mouseover" , e => {
    bgtext.innerHTML = 'PORTFOLIO'
})
portfolio.addEventListener("mouseout" , e => {
    bgtext.innerHTML = ''
})



contact.addEventListener("mouseover" , e => {
    bgtext.innerHTML = 'CONTACT'
})
contact.addEventListener("mouseout" , e => {
    bgtext.innerHTML = ''
})