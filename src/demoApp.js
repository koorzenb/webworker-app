class DemoApp {

    constructor () {
        this.runWebWorker();
    }   
        
    runWebWorker() {
        const myButton = document.querySelector('button');

        function clickHandler(params) {
            const myWorker = new Worker('./src/worker.js');            
            const numberOne = 1;
            const numberTwo = 2;

            myWorker.postMessage([numberOne, numberTwo]);
            console.log('MainScript: what is 1 plus number2?');

            myWorker.onmessage = function(e) {
                console.log(e.data);                 
                console.log('Main script: ;| thanks');
            }
        }

        myButton.addEventListener("click", clickHandler);
    }
}

const demo = new DemoApp();