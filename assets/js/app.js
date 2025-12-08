window.onload = (event) => {
    console.log("page is fully loaded");
    //FIXME remove after dev
    initialTitle = document.title;
    setInterval(function(){
        currWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        currHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        //document.title = initialTitle + " [" + currWidth + "x" + currHeight + "]";
        document.title = currWidth + "x" + currHeight;
    }, 1000)
};