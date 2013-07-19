/*
 * grunt-smarttext
 * https://github.com/nrub/grunt-smarttext
 *
 * Copyright (c) 2013 Paul English
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        smarttext: {
            default_options: {
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp'
                }]
            },
            custom_replacements: {
                options: {
                    singles: false,
                    apostrophes: false,
                    doubles: false,
                    emdashes: false,
                    ellipses: false,
                    widows: false,
                    custom_replacements: [[/non-custom replacement/g, "cUsToM_rEpLaCeMeNt"]]
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/custom'
                }]
            },
            only_singles: {
                options: {
                    apostrophes: false,
                    doubles: false,
                    emdashes: false,
                    ellipses: false,
                    widows: false
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/singles'
                }]
            },
            only_apostrophes: {
                options: {
                    singles: false,
                    doubles: false,
                    emdashes: false,
                    ellipses: false,
                    widows: false
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/apostrophes'
                }]
            },
            only_doubles: {
                options: {
                    singles: false,
                    apostrophes: false,
                    emdashes: false,
                    ellipses: false,
                    widows: false
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/doubles'
                }]
            },
            only_emdashes: {
                options: {
                    singles: false,
                    apostrophes: false,
                    doubles: false,
                    ellipses: false,
                    widows: false
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/emdashes'
                }]
            },
            only_ellipses: {
                options: {
                    singles: false,
                    apostrophes: false,
                    doubles: false,
                    emdashes: false,
                    widows: false
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/ellipses'
                }]
            },
            only_widows: {
                options: {
                    singles: false,
                    apostrophes: false,
                    doubles: false,
                    emdashes: false,
                    ellipses: false
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'tmp/widows'
                }]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'smarttext', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
