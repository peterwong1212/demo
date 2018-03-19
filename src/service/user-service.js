/*
* @Author: Peter Wong
* @Date:   2018-03-16 11:04:26
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-16 11:25:49
*/
'use strict'
var _mm = require('util/mm.js');

var _user = {


	checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

	//logout
	logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
}

module.exports = _user;