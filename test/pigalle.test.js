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
const {PigalleBaseClass} = require('@pigalle/core.base.class')
const {JsonSerializer} = require('@pigalle/serializers.simple-json')
const {SerializerPluginBase} = require('@pigalle/plugins.serializer')

describe('Class {Pigalle}: ', () => {
  it('should be a function', () => {
    (Pigalle).should.be.a.Function()
  })
  it(' call factory() should return an instance of {Pigalle}', () => {
    (Pigalle.factory()).should.be.an.instanceOf(Pigalle)
  })
})

describe('Function {pigalle}:', () => {
  it('should be a function', () => {
    (pigalle).should.be.a.Function()
  })
  it('call () should return an instance of {Pigalle}', () => {
    (pigalle()).should.be.an.instanceOf(Pigalle)
  })
})

describe('{Pigalle}.use() ', () => {
  let p

  class InvalidPlugin extends PigalleBaseClass {

  }

  class FakeSerializer extends SerializerPluginBase {
    constructor (...args) {
      super(...args)
      this.setName('fakeSerializer')
    }
  }

  beforeEach(() => {
    p = pigalle()
  })

  describe('passing invalid number of arguments', () => {
    it('use() should throw an {Error}', () => {
      (() => p.use()).should.throw()
    })
    it('use("poulet", "poulet", "poulet") should throw an {Error}', () => {
      (() => p.use('poulet', 'poulet', 'poulet')).should.throw()
    })
  })

  describe('using installed Pigalle plugin', () => {
    it('use("@pigalle/serializers.simple-json") should be an object', () => {
      (p.use('@pigalle/serializers.simple-json')).should.be.an.Object()
    })

    it('use(require("@pigalle/serializers.simple-json")) should be an object', () => {
      (p.use(require('@pigalle/serializers.simple-json'))).should.be.an.Object()
    })

    it('use(require("@pigalle/serializers.simple-json")) should have a property {serializer}', () => {
      (p.use(require('@pigalle/serializers.simple-json'))).should.have.a.property('serializer')
    })

    it('use(require("@pigalle/serializers.simple-json")).serializer should be a {Function}', () => {
      (p.use(require('@pigalle/serializers.simple-json')).serializer).should.be.a.Function()
    })

    it('use(require("@pigalle/serializers.simple-json")).serializer() should be an instance of {JsonSerializer}', () => {
      (p.use(require('@pigalle/serializers.simple-json')).serializer()).should.be.an.instanceOf(JsonSerializer)
    })

    it('use(require("@pigalle/serializers.simple-json")).use(require("@pigalle/serializers.simple-json")).serializer() should be an instance of {Map}', () => {
      (p.use(require('@pigalle/serializers.simple-json')).use(FakeSerializer).serializer).should.be.an.instanceOf(Map)
    })

    it('use("@pigalle/serializers.simple-json").use("@pigalle/serializers.simple-json") should throw {DuplicateDeclarationError}', () => {
      (() => p.use('@pigalle/serializers.simple-json').use('@pigalle/serializers.simple-json')).should.throw()
    })
  })

  describe('call root Pigalle scope after using', () => {
    it('a Pigalle plugin should be an instance of {Pigalle}', () => {
      (p.use('@pigalle/serializers.simple-json').serializer().pigalle()).should.be.an.instanceOf(Pigalle)
    })
    it('a third-party plugin should be an instance of {Pigalle}', () => {
      (p.use('connect').pigalle()).should.be.an.instanceOf(Pigalle)
    })
  })

  describe('using installed third-party library', () => {
    it('use("connect") should be an object', () => {
      (p.use('connect')).should.be.an.Object()
    })

    it('use(require("connect")) should be an object', () => {
      (p.use(require('connect'))).should.be.an.Object()
    })
  })

  describe('using uninstalled plugin', () => {
    it('use("beurk-beurk-lib") should throw', () => {
      (() => p.use('beurk-beurk-lib')).should.throw()
    })
  })

  describe('using a plugin derived of {PigalleBaseClass}', () => {
    it('use("beurk-beurk-lib") should throw', () => {
      (() => p.use(InvalidPlugin)).should.throw()
    })
  })
})
