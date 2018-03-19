/*
* @Author: Peter Wong
* @Date:   2018-03-19 11:10:47
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-19 11:57:23
*/
'use strict';
require('./index.css')
require('page/common/nav-simple/index.js');
var _mm  = require('util/mm.js');


$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    if(type === 'payment'){
        var orderNumber  = _mm.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    
    $element.show();
})