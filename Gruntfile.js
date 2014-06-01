/*
 * GsScriptProject
 * https://github.com/kkirby/GsScriptProject
 *
 * Copyright (c) 2014 Kyle Kirby
 * Licensed under the GNU license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Configuration to be run (and then tested).
		GsScriptProject: [{
			options: {
				config: '/Users/kkirby/Projects/NowPik/v3/web/tablet/config.js'
			}
		}]

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.registerTask('test', ['GsScriptProject']);
};
