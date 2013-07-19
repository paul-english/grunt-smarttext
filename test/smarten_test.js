'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.smarten = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/test-file-one.html');
    var expected = grunt.file.read('test/expected/test-file-one.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');
    actual = grunt.file.read('tmp/test-file-two.html');
    expected = grunt.file.read('test/expected/test-file-two.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  custom_replacements: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/custom/test-file-one.html');
    var expected = grunt.file.read('test/expected/custom/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/custom/test-file-two.html');
    expected = grunt.file.read('test/expected/custom/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  only_singles: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/singles/test-file-one.html');
    var expected = grunt.file.read('test/expected/singles/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/singles/test-file-two.html');
    expected = grunt.file.read('test/expected/singles/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  only_apostrophes: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/apostrophes/test-file-one.html');
    var expected = grunt.file.read('test/expected/apostrophes/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/apostrophes/test-file-two.html');
    expected = grunt.file.read('test/expected/apostrophes/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  only_doubles: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/doubles/test-file-one.html');
    var expected = grunt.file.read('test/expected/doubles/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/doubles/test-file-two.html');
    expected = grunt.file.read('test/expected/doubles/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  only_emdashes: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/emdashes/test-file-one.html');
    var expected = grunt.file.read('test/expected/emdashes/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/emdashes/test-file-two.html');
    expected = grunt.file.read('test/expected/emdashes/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  only_ellipses: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/ellipses/test-file-one.html');
    var expected = grunt.file.read('test/expected/ellipses/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/ellipses/test-file-two.html');
    expected = grunt.file.read('test/expected/ellipses/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  only_widows: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/widows/test-file-one.html');
    var expected = grunt.file.read('test/expected/widows/test-file-one.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
    actual = grunt.file.read('tmp/widows/test-file-two.html');
    expected = grunt.file.read('test/expected/widows/test-file-two.html');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  }
};
