/**
 * This file is part of pigalle
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const pigalle = require('../lib/pigalle')
const {Pigalle} = require('../lib/pigalle')

describe('Class {Pigalle}', () => {
  it('should be a function', () => {
    (Pigalle).should.be.a.Function()
  })
})

describe('Function {pigalle}', () => {
  it('should be a function', () => {
    (pigalle).should.be.a.Function()
  })
})
