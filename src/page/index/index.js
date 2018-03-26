/*
* @Author: Yineng
* @Date:   2018-03-13 12:00:43
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-27 07:39:00
*/

"use strict";
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
var _mm  = require('util/mm.js');


$(function() {
 
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
  
    var $slider     = $('.banner').unslider({
        dots: true
    });
   
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});
