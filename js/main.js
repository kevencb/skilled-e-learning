const main = document.querySelector('main')

async function loadItems(){
    try {
        const res = await fetch('data.json')
        const items = await res.json()
        console.table(items.sections)
        displayItems(items.sections)
    } catch (error) {
        console.error("No hemos encotrado la información.", error)
    }
}

function displayItems(items){
    const itemsContainer = document.createElement('div')
    main.appendChild(itemsContainer)
    items.forEach((item, index) => {
        const article = document.createElement('article')
        if( index === 0){
            article.classList.add("card__featured")
            article.innerHTML = `
                <h2>${item.title}</h2>
        `
        }
        else{
            article.classList.add("card__item")
            article.innerHTML = `
                <img src="${item.icon}" class="card__item-icon" aria-label="Animation icon" alt="Animation icon"/>
                <div class="card__item-info">
                    <h2>${item.title}</h2>
                    <p>Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
                    <a href="#" aria-label="Get Started">Get Started</a>
                </div>
            `
        }
        
        itemsContainer.appendChild(article)
    });
    console.log("Hi")
}
loadItems()