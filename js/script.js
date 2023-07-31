function doThing() {
    console.log('Do Things')

}

function doSameOriginFetch() {
    return fetch('https://jjmean2.github.io/sample-site/static/data.json');
}

function doCrossOriginFetch() {
    return fetch('https://squarelab-jwlee.github.io/sample/site/static/data.json');
}

window.addEventListener('load', function () {
    doThing();
});