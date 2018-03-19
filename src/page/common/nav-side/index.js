/*
* @Author: Peter Wong
* @Date:   2018-03-19 08:13:09
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-19 11:04:48
*/

'use strict';
require('./index.css');
var _mm             = require('util/mm.js');
var templateIndex   = require('./index.string');
// 
var navSide = {
    option : {
        name : '',
        navList : [
            {name : 'user-center', desc : 'Personal Center', href: './user-center.html'},
            {name : 'order-list', desc : 'My Booking', href: './order-list.html'},
            {name : 'user-pass-update', desc : 'Chang Password', href: './user-pass-update.html'},
            {name : 'about', desc : 'About mmall', href: './about.html'}
        ]
    },
    init : function(option){
        // 
        $.extend(this.option, option);
        this.renderNav();
    },
    
    renderNav : function(){
        // active data
        for(var i = 0, iLength = this.option.navList.length; i < iLength; i++){
            if(this.option.navList[i].name === this.option.name){
                this.option.navList[i].isActive = true;
            }
        };
        // html da
        var navHtml = _mm.renderHtml(templateIndex, {
            navList : this.option.navList
        });
        
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;