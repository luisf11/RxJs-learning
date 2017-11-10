import {Observable} from 'rxjs-es';

const output = document.getElementById("output");
const button = document.getElementById("button");

let click = Observable.fromEvent(button,"click");

function load(url){
    return Observable.create(observer => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load",()=>{
                const data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
        });
        xhr.open("GET",url);
        xhr.send();
    })
}

function renderMovies(movies){
    movies.forEach(m => {
        const div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

click.flatMap(e => load("movies.json"))
    .subscribe(
    renderMovies,
    e =>  console.log(`error: ${e}`),
    () =>  console.log('complete')
);

