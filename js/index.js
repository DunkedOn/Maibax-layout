$(document).ready(function () {
    $('.courses-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                dots: true,
                arrows: false
            }
        }]
    });
});
const sass = require('node-sass');
 
require('load-grunt-tasks')(grunt);
 
grunt.initConfig({
    sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    }
});
 
grunt.registerTask('default', ['sass']);