'use strict';
var controllername = 'home';

// var animateCss = require('animate.css-js');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$animate'];

    function controller($animate) {
        var vm = this;
        vm.controllername = fullname;
        console.log('I exist');

        vm.boolean = false;
        console.log($animate);

        $animate.animate('noam', function() {
            document.getElementById('noam').velocity('fadeIn', {
                delay: 300,
                duration: 600
            });
            return {
                enter: function(element, done) {
                    element.velocity('fadeIn', {
                        delay: 300,
                        duration: 600,
                        complete: done
                    });
                    return function() {
                        element.stop();
                    };
                },
                leave: function(element, done) {
                    element.velocity('fadeOut', {
                        duration: 300,
                        complete: done
                    });
                    return function() {
                        element.stop();
                    };
                }
            };
        });

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
