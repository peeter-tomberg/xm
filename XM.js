define(["underscore","backbone"], function(_, Backbone) {

    var XMs = [];
    
    window.addEventListener("message", function(event) {
        
        _.each(XMs, function(XM){
            
            if(XM.receiver == event.source)    
                XM.trigger(event.data.eventName, event.data.eventData);
                
        });
		
	}, false);  
	

    /**
     *  Define the XM object
     */
	var XM = function(receiver) {
        
        /**
         * Add Events support
         */ 
        _.extend(this, Backbone.Events);
    
        /**
         * Used for 
         */
        this.receiver = receiver;
        
        this.postEvent = function(eventName, eventData) {
            receiver.postMessage({eventName : eventName, eventData : eventData}, "*");
        };
        
        XMs.push(this);
        
    };

	return XM;
});