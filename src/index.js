import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'material-icons/iconfont/material-icons.css';

import './images/favicon.png';
import './images/logo.png';
import './images/news-0.jpg';
import './images/news-1.jpg';
import './images/news-2.jpg';
import './images/news-3.jpg';
import './images/news-4.jpg';
import './images/news-5.jpg';
import './index.css';

$(document).ready(function () {
    $('.sidebar-toggler, .sidebar-header a, .navbar-brand-section a').on('click', () => {
        $('#sidebar').toggleClass('show');
        $('#sidebar').toggleClass('hide');
    });

    $('.sidebar-header a, .navbar-brand-section a').on('click', () => {
      if($('#sidebar').hasClass('show')) {
        $('#sidebar').toggleClass('show');
        $('#sidebar').toggleClass('hide');
      }
      $('.nav-item.active').toggleClass('active');
      $('.nav-item-home').addClass('active');
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

    $('.modal-footer .btn-success').on('click', function(e) {
      let valid = true;
      $(".modal-body input[type='text']").each((i, el) => {
        if(!$(el).val()) {
          valid = false;
          $(el).addClass('box-shadow-red');
        }
        else {
          $(el).removeClass('box-shadow-red');
        }
      });
      if($(".modal-body input:checked").map((i, el) => el).length === 0) {
        valid = false;
        $(".modal-body input[type='checkbox']").addClass('box-shadow-red');
      }
      else {
        $(".modal-body input[type='checkbox']").removeClass('box-shadow-red');
      }
      if(valid) {
        $('#registerModal').modal('toggle');
        $('.alert').toggleClass('fade');
        $('.alert').toggleClass('show');
        setTimeout(() => {
          $('.alert').toggleClass('show');
          $('.alert').toggleClass('fade');
        }, 3000);
      }
    });

});

const activateNavItem = function(navSection) {
  const navItemClass = `nav-item-${navSection}`
  $('.nav-item.active').toggleClass('active');
  $('.'+navItemClass).toggleClass('active');
}
