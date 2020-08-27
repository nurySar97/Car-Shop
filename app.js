const cars = [
    {name:"Discovery", cost:"10.000$" ,src:"https://www.hellomagazine.com/imagenes/travel/2020042388545/best-cars-for-dogs-and-owners/0-424-637/discovery-sport-z.jpg"},
    {name:"Ferrari", cost:"35.000$" ,src:"https://i.pinimg.com/736x/c7/f0/4c/c7f04cd2339978dedb7893769c94bec9.jpg"},
    {name:"KIA", cost:"6.000$" ,src:"https://www.kia.com/us/en/vehicles/k900/2020/_jcr_content/root/responsivegrid/mediatext_446753378.coreimg.100.1400.jpeg/1575494961737.jpeg"},
    {name:"Ford", cost:"50.000$" ,src:"https://pyxis.nymag.com/v1/imgs/20b/f74/6fd5fa6b9db3746f9a2c85e06f9f623a07-porce-918-spyder.rsquare.w700.jpg"},
    {name:"Mazda", cost:"43.000$" ,src:"https://www.mazdausa.com/siteassets/images/og-images/mazda-cx-30-subcompact-crossover.jpg"},
    {name:"KIA Sport", cost:"62.000$" ,src:"https://www.kia.com/us/en/vehicles/sportage/2020/_jcr_content/root/responsivegrid/mediatext.coreimg.100.1400.jpeg/1566248443438.jpeg"},
    {name:"Chrysler", cost:"100.000$" ,src:"https://www.chrysler.com/content/dam/fca-brands/na/chrysler/en_us/2020/300/vlp/desktop/2020-chrysler-300-sapppackage-4.jpg.image.700.jpg"},
    {name:"Lancia 037", cost:"92.000$" ,src:"https://www-dirtfish.imgix.net/Lancia-037-3QF.jpg?fit=crop&fm=pjpg&h=700&ixlib=php-1.2.1&q=70&w=700&wpsize=square-thumb"}
]

function keyGenerator(){
    let array = [],keyWord = [];
  
    for(let i = 97; i <= 122; i++){
      array.push(String.fromCharCode(i))
    }
    for(let i = 0; i < 6; i++) {
      keyWord.push(array[Math.floor(Math.random()*27)])
    }
    return keyWord.join("")
  }


let createCar = (car) => {
    return `
    <div class="car">
        <img class="car__img" src=${car.src} alt="">
        <h3>${car.name}</h3>
        <p>${car.cost}</p>
        <button>Click</button>
    </div>
    `
}
document.querySelector(".list").innerHTML = cars.map(car=>createCar(car)).join(" ")