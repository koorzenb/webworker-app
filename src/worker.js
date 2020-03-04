onmessage = function(e) {
    console.log('Worker: Message received from main script');
    const  workerResult = 'Worker: Mmm, let me think... you should go to the loo; or ' + (e.data[0] + e.data[1]);
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
}