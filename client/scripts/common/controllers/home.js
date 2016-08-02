'use strict';
var controllername = 'home';
// var animateCss = require('animate.css-js');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;
        console.log('I exist');

        vm.boolean = false;

        // var element = document.getElementById('noam');
        // animateCss.show(element, {
        //     animationName: 'fadeInUp',
        //     duration: 500,
        //     callbacks: [
        //         function() {
        //             alert('ok');
        //         }
        //     ]
        // });
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
