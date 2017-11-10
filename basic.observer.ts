import {Observable, Observer} from 'rxjs-es';

let numbers = [1, 5, 10];
let source = Observable.from(numbers);

//long way 
class MyObserver implements Observer<number>{
    next(value){
        console.log(`value: ${value}`);
    }

    error(e){
        console.log(`error: ${e}`);
    }

    complete(){
        console.log('complete');
    }
}

// source.subscribe(new MyObserver());

//short way
source.subscribe(
    value =>   console.log(`value: ${value}`),
    e =>  console.log(`error: ${e}`),
    () =>  console.log('complete')
);