/**
 * This file is part of pigalle
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module pigalle
 * @description Provide entry points to the Pigalle framework.
 * @example
 *
 * const pigalle = require('@pigalle/pigalle')
 *
 * pigalle().use('@pigalle/microservices')
 *
 */

const {UndefinedError} = require('@9fv.io/undefined-error')

const {PigalleBaseClass} = require('@pigalle/core.base.class')
const {PluginEntity} = require('@pigalle/entities.plugin')
const {PluginsRegistry} = require('@pigalle/registries.plugins')
const {ThirdPartiesRegistry} = require('@pigalle/registries.thirdparties')
const {Importer} = require('@pigalle/core.importer')

const REGISTRIES_KEYS = {
  PLUGINS: 'plugins',
  THIRD_PARTIES: 'thirdParties'
}

/**
 * The {Pigalle} class, which is the entry point of the Pigalle framework.
 *
 * @class
 * @public
 */
class Pigalle extends PigalleBaseClass {
  /**
   * Create a new instance of {Pigalle}.
   *
   * @param args - The arguments.
   */
  constructor (...args) {
    super(...args)
    this.init()
  }

  /**
   * Run necessary tasks to init the {Pigalle} instance.
   *
   * @return {Pigalle}
   * @public
   */
  init () {
    return this.initRegistries()
  }

  /**
   * Initialize the registries.
   *
   * @return {Pigalle} The current instance.
   * @public
   */
  initRegistries () {
    return this.initPluginsRegistry()
      .initThirdPartiesRegistry()
  }

  /**
   * Initialize the plugins registry.
   *
   * @return {Pigalle} The current instance.
   * @public
   */
  initPluginsRegistry () {
    return this.set(REGISTRIES_KEYS.PLUGINS, PluginsRegistry.factory())
  }

  /**
   * Initialize the third-parties registry.
   *
   * @return {Pigalle} The current instance.
   * @public
   */
  initThirdPartiesRegistry () {
    return this.set(REGISTRIES_KEYS.THIRD_PARTIES, ThirdPartiesRegistry.factory())
  }

  plugins () {
    return this.get(REGISTRIES_KEYS.PLUGINS)
  }

  thirdParties () {
    return this.get(REGISTRIES_KEYS.THIRD_PARTIES)
  }

  thirds () {
    return this.thirdParties()
  }

  /**
   * Use a plugin for the Pigalle framework.
   *
   * @param plugin {string|object} - The plugin name or the plugin object.
   * @param [alias] {string} - Optional alias.
   * @return {Pigalle} The current instance of {Pigalle}.
   */
  use (...args) {
    if ((args.length < 1) || (args.length > 2)) {
      throw new Error('Invalid number of parameters')
    }
    let plugin = args[0]
    let alias = args[1]
    if (!plugin) {
      throw new UndefinedError()
    }
    if (!alias) {
      alias = (typeof plugin === 'string') ? plugin : this.generateId()
    }
    const instance = Pigalle.importPlugin(plugin)
    return this.registerPlugin(instance, alias)
  }

  /**
   * Import a plugin (third-party or Pigalle plugin).
   *
   * @param o {string|object} - Two ways:
   *   * If string: the name of plugin.
   *   * If object: a class or an instance of class.
   * @param [options] {object} - Optional options to pass to the constructor if provided plugin is a class.
   * @return {object} An instance of plugin.
   * @public
   * @todo Externalize this static method to an helper module for Pigalle plugins.
   */
  static importPlugin (o, options) {
    let plugin = (typeof o === 'string') ? Importer.factory(o).import().library : o
    if (['function', 'object'].indexOf(typeof plugin) < 0) {
      throw new Error('Plugin must be a {function} or {object}')
    }
    let Klass = (typeof plugin === 'object') ? Pigalle.getPigallePluginClass(plugin) : null
    Klass = (!Klass) ? plugin : Klass
    let instance = (Klass && Klass.prototype) ? new Klass(options) : Klass
    return instance
  }

  /**
   * Lookup a module and find the Pigalle plugin class if exists.
   * If not exists, return {null}.
   *
   * @param plugin {*} The module to analyze.
   * @return {null|PluginEntity} An instance of derived class of {PluginEntity} if founded. {null} else.
   * @public
   * @todo Externalize this static method to an helper module for Pigalle plugins.
   */
  static getPigallePluginClass (plugin) {
    if (!plugin) {
      throw UndefinedError()
    }
    let keys = Object.keys(plugin)
    for (let key of keys) {
      if (plugin[key] && PluginEntity.isPigalle(plugin[key])) {
        return plugin[key]
      }
    }
  }

  /**
   * Store a third-party or Pigalle plugin into the plugins registry.
   *
   * @param plugin {object} - An instance of plugin.
   * @param alias {string} - Alias to access plugin.
   * @return {Pigalle} The current instance of Pigalle class.
   * @public
   */
  registerPlugin (plugin, alias) {
    return (PluginEntity.isPigalle(plugin) === true) ? this.registerPigallePlugin(plugin, alias) : this.registerThirdPartyPlugin(plugin, alias)
  }

  /**
   * Store a Pigalle plugin into the Pigalle plugins registry.
   *
   * @param plugin {object} - An instance of plugin.
   * @param alias {string} - Alias to access plugin.
   * @return {Pigalle} The current instance of Pigalle class.
   * @public
   */
  registerPigallePlugin (plugin, alias) {
    if (PluginEntity.isParentClassOf(plugin)) {
      throw new Error('Is not a Pigalle plugin') // @todo: create a custom exception named {NotPigallePluginError}
    }
    this.plugins().add(alias, plugin)
    return this.addScope(plugin)
  }

  /**
   * Store a third-party plugin into the third-parties registry.
   *
   * @param plugin {object} - An instance of plugin.
   * @param alias {string} - Alias to access plugin.
   * @return {Pigalle} The current instance of Pigalle class.
   * @public
   */
  registerThirdPartyPlugin (plugin, alias) {
    this.thirds().add(alias, plugin)
    return this
  }

  addScope (plugin) {
    const scope = plugin.scope()
    const name = plugin.name()
    const fn = () => plugin
    if (this.hasMethod(scope)) {
      if (this[scope] instanceof Map) {
        this[scope].set(name, fn)
      } else {
        const oldFn = this[scope]
        this[scope] = new Map()
        this[scope].set(oldFn.name, oldFn)
        this[scope].set(name, fn)
      }
    } else {
      this[scope] = fn
    }
    return this
  }
}

/**
 * A factory function to create an instance of {Pigalle}.
 *
 * @param args - The arguments.
 * @return {Pigalle} A instance of {Pigalle} class.
 * @public
 * @category factory
 */
function pigalle (...args) {
  return Pigalle.factory(...args)
}

module.exports = pigalle
module.exports.Pigalle = Pigalle
