var singleton = function() {
    "use strict";
    privateVariable;
    function privateFunction(a){
        if(a != undefined)
            return a/5;
    }

    return {
        firstMethod: function(a, b) {
            return privateFunction(a/b);
        }
    }
}();

