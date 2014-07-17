/*
 * GsScriptProject
 * https://github.com/kkirby/GsScriptProject
 *
 * Copyright (c) 2014 Kyle Kirby
 * Licensed under the GNU license.
 */

'use strict';

var GSP = require('GsScriptProject');

module.exports = function(grunt) {
	grunt.registerMultiTask('gsScriptProject', 'Compile GsScriptProjects.', function() {
		var args = this.args;
		var watch = args.indexOf('watch') != -1;
		var async = this.async();
		var options = this.options();
		GSP.compile(options.config, watch, function(){
			if(!watch){
				async();
			}
		});
	});
};