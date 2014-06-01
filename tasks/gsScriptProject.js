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
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options();
		GSP.compile(options.config, false, this.async());
	});
};
