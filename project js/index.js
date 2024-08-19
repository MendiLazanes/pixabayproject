function init() {
    buttons();
    data();

}


const fetchData = (input) => {
    fetch(`https://pixabay.com/api/?key=44413640-db6aca149b9bc86cfc0f3483b&q=${input}&per_page=3&image_type=photo`)
        .then(response => response.json())
        .then(data => {
            console.log('success:', data);

            func1(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function data() {
    let search = document.querySelector("#search");
    let inp = document.querySelector("#in");
    let input;
    search.addEventListener("click", () => {
       
        input = inp.value;
        fetchData(input);
       
    });
    inp.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const input = inp.value;
            fetchData(input);
        }
    });

}


function buttons() {
    let btns = document.querySelector("#btns");
    let cardsDiv = document.querySelector("#cardsDiv")

    let arr = ["trees", "beach", "ice_cream", "mountain", "river", "apple", "bananas", "cat", "dog", "car", "bicycle", "house", "lamp", "book", "pencil", "notebook", "guitar",
        "piano", "drums", "chocolate", "cookie", "bread", "butter", "cheese", "milk", "coffee", "tea", "computer", "phone", "watch", "table", "chair", "sofa", "window", "door", "painting",
        "vase", "flower", "garden", "park", "bridge", "boat", "train", "airplane", "rocket", "star", "moon", "sun", "cloud", "rain"
    ];
   
   
    for (let i = 0; i < arr.length; i++) {
        let btn = document.createElement('button')
        btn.className = "m-2 rounded col-1";
        btn.innerHTML = arr[i];
        
        btns.append(btn)
       
        btn.addEventListener("click", () => {
          
           
            fetchData(arr[i]);
            

        })
    }


}


const func1 = (arr) => {
    clearCards();
    for (let i = 0; i < arr.hits.length; i++) {
        const s = new Pixbay(arr.hits[i].largeImageURL,arr.hits[i].tags, arr.hits[i].downloads, arr.hits[i].views,arr.hits[i].pageURL);
        s.render()
        
    }

}


function clearCards() {
    const row = document.querySelector("#rowid");
    row.innerHTML = '';
}




init();

