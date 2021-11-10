
"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function (event) {

    // options
    const breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140
    };

    if(document.getElementById('navbar_global')) {
        document.getElementById('navbar_global').addEventListener('shown.bs.collapse', function() {
            document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
        });
    
        document.getElementById('navbar_global').addEventListener('hidden.bs.collapse', function() {
            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
        });
    }

    var preloader = d.querySelector('.preloader');
    if (preloader) {

        const animations = ['oneByOne', 'delayed', 'sync', 'scenario'];

        new Vivus('loader-logo', { duration: 80, type: 'oneByOne' }, function () { });

        setTimeout(function () {
            preloader.classList.add('show');
        }, 1500);
    }

    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


});
