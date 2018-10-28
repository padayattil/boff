import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import './images/logo.png';
import './images/car-0.jpg';
import './images/car-1.png';
import './images/car-2.jpg';
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

});
