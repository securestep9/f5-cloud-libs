/**
 * Copyright 2017 F5 Networks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var Logger = require('../../../f5-cloud-libs').logger;

module.exports = {
    testConsole: function(test) {
        var logger = Logger.getLogger();
        test.ok(logger.transports.console, 'No conosle logger found.');
        test.done();
    },

    testNoConsole: function(test) {
        var logger = Logger.getLogger({console: false});
        test.ifError(logger.transports.console);
        test.done();
    },

    testLogfile: function(test) {
        var logger = Logger.getLogger({fileName: 'foo'});
        test.ok(logger.transports.file, 'No file logger found.');
        test.done();
    },

    testNoLogFile: function(test) {
        var logger = Logger.getLogger();
        test.ifError(logger.transports.file);
        test.done();
    }
};