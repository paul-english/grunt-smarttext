/*
 * grunt-smarttext
 * https://github.com/nrub/grunt-smarttext
 *
 * Copyright (c) 2013 Paul English
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var jsdom = require('jsdom');
var jqueryContents = fs.readFileSync(path.join(__dirname,'../vendor/jquery-2.0.3.min.js'));

module.exports = function(grunt) {

    var smarttext = function(str, options) {
        var updated = false;

        if (options.apostrophes) {
            str = str.replace(/(\w)'(\w)/g, "$1’$2");
            updated = true;
        }

        if (options.singles) {
            // opening singles
            str = str.replace(/(^|[-\u2014\s(\["])'/g, "$1‘");
            // closing singles
            str = str.replace(/'([-\u2014\s)\]"]|$)/g, "’$1");
            updated = true;
        }

        if (options.doubles) {
            // opening doubles
            str = str.replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1“");
            // closing doubles
            str = str.replace(/"/g, "”");
            updated = true;
        }

        if (options.emdashes) {
            str = str.replace(/--/g, "—");
            updated = true;
        }

        if (options.ellipses) {
            str = str.replace(/\.{3}/g, "…");
            updated = true;
        }

        if (options.widows) {
            str = str.replace(/\s(\S+\s*)$/,'&nbsp;$1');
            updated = true;
        }

        if (options.custom_replacements.length > 0) {
            for (var i = 0; i < options.custom_replacements.length; i++) {
                var replacement = options.custom_replacements[i];
                str = str.replace(replacement[0], replacement[1]);
            }
            updated = true;
        }

        return [updated, str];
    };

    var processFile = function(f,dest,options,$,window) {
        grunt.log.subhead('Processing ' + f.cyan);
        var updated = false;

        var elements = $("*:not(script,style,pre,code)");
        elements.each(function(index, element) {
            // Only replace strings in DOM text nodes
            var text_nodes = $(element)
                .contents()
                .filter(function() {
                    return this.nodeType === 3;
                });
            text_nodes.each(function(index, node) {
                var text_node = $(node);
                var smart_response = smarttext(text_node.text(), options);
                var text_updated = smart_response[0];
                var replacement_text = smart_response[1];
                if (!updated && text_updated) {
                    updated = true;
                }
                text_node.replaceWith(replacement_text);
            });
        });

        if (updated){
            var updatedContents = window.document.doctype.toString() +
                    window.document.innerHTML;
            grunt.file.write(dest || f, updatedContents);
            grunt.log.writeln('File ' + (dest || f).cyan + ' created/updated.');
        }

    };

    grunt.registerMultiTask('smarttext', 'Replace quotes, em-dashes, and ellipses with UTF equivalents.', function() {

        var done = this.async();
        var countdown = 0;

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            singles: true,
            apostrophes: true,
            doubles: true,
            emdashes: true,
            ellipses: true,
            widows: true,
            custom_replacements: []
        });

        // TODO only allow html files

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            var dest = f.dest;

            f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function(f) {
                countdown++;
                var srcContents = grunt.file.read(f);
                jsdom.env({
                    html: srcContents,
                    src: [jqueryContents],
                    done: function process(errors, window) {
                        processFile(f,dest,options,window.$,window);
                        countdown--;
                        if (countdown === 0) {
                            done();
                        }
                    }
                });
            });
        });
    });
};
