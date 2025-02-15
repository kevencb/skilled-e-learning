const main = document.querySelector('main')

async function loadItems(){
    try {
        const res = await fetch('data.json')
        const items = await res.json()
        console.table(items.sections)
        // displayItems(items.sections)
    } catch (error) {
        console.error("No hemos encotrado la información.", error)
    }
}


loadItems()