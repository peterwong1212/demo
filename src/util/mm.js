/*
* @Author: Peter Wong
* @Date:   2018-03-15 13:14:28
* @Last Modified by:   Peter Wong
* @Last Modified time: 2018-03-15 18:07:49
*/
'use strict';
var Hogan = require('hogan');
var conf = {
    serverHost : ''
};

var _mm = {
	request: function(param){
		var _this = this;
		$.ajax({
			type             : param.method  || 'get',
			url              : param.url     ||  '',
			dateType         : param.type    || 'json',
			data             : param.data    || '',
			success          : function(res){

				//request successfully
				if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                // no login, force to login
                else if(10 === res.status){
                    _this.doLogin();
                }
                //request data error 
                else if(1 === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }

			},

			error            : function(err){

				typeof param.error === 'function' && param.error(err.statusText);


				
			}
		});
	},
	// get server url
	getServerUrl : function(path){
        return conf.serverHost + path;
    },
    // get url para,
    getUrlParam : function(name){
        var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result  = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },

    renderHtml : function(htmlTemplate, data){
        var template    = Hogan.compile(htmlTemplate),
            result      = template.render(data);
        return result;
    },
    successTips : function(msg){
        alert(msg || 'SUCCESSFUL！');
    },
    // 错误提示
    errorTips : function(msg){
        alert(msg || 'SOMETHING WITH WRONG');
    },

    validate : function(value, type){
        var value = $.trim(value);
        // 
        if('require' === type){
            return !!value;
        }
        // validate phone number
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        // validate email address
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
	//login
	doLogin : function(){
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    },

    goHome : function(){
        window.location.href = './index.html';
    }

};


module.exports = _mm;