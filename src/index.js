import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import './images/logo.png';
import './images/car.jpg';
import './images/car-0.jpg';
import './images/car-1.jpg';
import './images/car-2.jpg';
import './images/news-0.jpg';
import './images/news-1.jpg';
import './images/news-2.jpg';
import './images/news-3.jpg';
import './images/news-4.jpg';
import './images/news-5.jpg';
import './index.css';

$(document).ready(function () {
    $('.sidebar-toggler').on('click', () => {
        $('#sidebar').toggleClass(function() {
          if($(this).hasClass('show')) {
            $(this).toggleClass('show');
            return 'hide';
          } else if($(this).hasClass('hide')) {
            $(this).toggleClass('hide');
            return 'show';
          }
          return 'show';
        });
    });

    $('.sidebar-navitems .nav-item, .navbar .nav-item').on('click', function() {
      $('.nav-item.active').toggleClass('active');
      const navItemClass = `nav-item-${$($(this).children('a')[0]).attr('href').slice(1) || 'home'}`
      console.log(navItemClass);
      $('.'+navItemClass).toggleClass('active');
    });

});
