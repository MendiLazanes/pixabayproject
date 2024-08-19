class Pixbay {
    constructor(image,tags, download, views, pageURL) {
        this.image = image;
        this.tags = tags;
        this.download = download;
        this.views = views;
        this.pageURL = pageURL;
    }
    

    render() {
        
        const row = document.querySelector("#rowid");
        const card = document.createElement("div");
        card.className = "card col-3";
       
        card.innerHTML = `<img width="200" height= "200" src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title"> ${this.tags}</h5>
           <p class="card-title">downlods: ${this.download}</p>
          <p class="card-text">views: ${this.views}</p>
          <a href="${this.pageURL}" target="_blank" class="btn btn-primary">Download</a>
         
        </div>`;
        
        row.append(card);
        
    }
}