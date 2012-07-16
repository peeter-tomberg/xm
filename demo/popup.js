require.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.7.2',
        'underscore': 'https://raw.github.com/amdjs/underscore/master/underscore', // AMD support
        'backbone': 'https://raw.github.com/amdjs/backbone/master/backbone' // AMD support
    }
});

require(["../XM"], function(XM) {
    
    var xm = new XM(window.parent);
    
    xm.postEvent("test");
    
    xm.bind("test2", function(data) {
        
        console.log("We have recieved a message from the parent with data", data);
    
    });
    
});