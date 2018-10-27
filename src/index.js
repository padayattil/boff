import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

import './images/logo.png';
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
