require.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.7.2',
        'underscore': 'https://raw.github.com/amdjs/underscore/master/underscore', // AMD support
        'backbone': 'https://raw.github.com/amdjs/backbone/master/backbone' // AMD support
    }
})

require(["../XM"], function(XM) {
    
    var xm = new XM(document.getElementById("iframe").contentWindow);
    
    xm.bind("test", function(){
        console.log("We have recieved a message from the popup, respoding");
        xm.postEvent("test2", { some : "data", goes : "here"});
    });
    
});