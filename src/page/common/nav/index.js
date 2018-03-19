/*
* @Author: Peter Wong
* @Date:   2018-03-16 10:38:47
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-16 11:31:32
*/


'use strict';
require('./index.css');
var _mm     = require('util/mm.js');
var _user   = require('service/user-service.js');
var _cart   = require('service/cart-service.js');

// navigation
var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent : function(){
        // login
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // register
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // logout
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
        
    },
    // load information
    loadUserInfo : function(){
    	_user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg){
            // do nothing
        });
        
    },
    //lood cart
    loadCartCount : function(){
    	  _cart.getCartCount(function(res){
            $('.nav .cart-count').text(res || 0);
        }, function(errMsg){
            $('.nav .cart-count').text(0);
        });
    }
        
};

module.exports = nav.init();