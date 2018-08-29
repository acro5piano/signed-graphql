#!/usr/bin/env node

'use strict'

const argv = require('optimist').boolean('write').argv

require('../src').run(argv)
