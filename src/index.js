import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'material-icons/iconfont/material-icons.css';

import './images/favicon.png';
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
        $('#sidebar').toggleClass('show');
        $('#sidebar').toggleClass('hide');
    });

    const navSection = window.location.hash.slice(1) || 'home';
    activateNavItem(navSection);

    $('.sidebar-navitems .nav-item, .navbar .nav-item').on('click', function(e) {
      if($('#sidebar').hasClass('show')) {
        $('#sidebar').toggleClass('show');
        $('#sidebar').toggleClass('hide');
      }
      const navSection = $($(this).children('a')[0]).attr('href').slice(1) || 'home';
      activateNavItem(navSection);
    });

});

const activateNavItem = function(navSection) {
  const navItemClass = `nav-item-${navSection}`
  $('.nav-item.active').toggleClass('active');
  $('.'+navItemClass).toggleClass('active');
}
