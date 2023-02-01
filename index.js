function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return squmbus;
}
function squmbus(){}

function returnsAnAnonymousFunction(){
    return () => console.log('what');
}