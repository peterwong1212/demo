/*
* @Author: Peter Wong
* @Date:   2018-03-16 12:55:30
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-19 11:05:01
*/
'use strict';

require('./index.css');
var _mm     = require('util/mm.js');
// header
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');
    
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent : function(){
        var _this = this;
        
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        // inout enter key to search
        $('#search-input').keyup(function(e){
            
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
   
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }
        
        else{
            _mm.goHome();
        }
    }
};

header.init();