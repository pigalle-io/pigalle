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
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class')

/**
 * The {Pigalle} class, which is the entry point of the Pigalle framework.
 *
 * @class
 * @public
 */
class Pigalle extends PigalleBaseClass {
  /**
   * Use a plugin for the Pigalle framework.
   *
   * @param plugin
   * @return {Pigalle} The current instance of {Pigalle}.
   */
  use (plugin) {
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
