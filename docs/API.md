# API reference of :

The Pigalle framework. Made for Node users. Simple, lightweight, decoupled, maintenable, reliable and tested microlibraries for all your applicative scope.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_pigalle"></a>

### pigalle
Provide entry points to the Pigalle framework.

**Example**  
```js
const pigalle = require('@pigalle/pigalle')

pigalle().use('@pigalle/microservices')
```

* [pigalle](#module_pigalle)
    * [~Pigalle](#module_pigalle..Pigalle)
        * [new Pigalle(...args)](#new_module_pigalle..Pigalle_new)
        * _instance_
            * [.init()](#module_pigalle..Pigalle+init) ⇒ <code>Pigalle</code>
            * [.initRegistries()](#module_pigalle..Pigalle+initRegistries) ⇒ <code>Pigalle</code>
            * [.initPluginsRegistry()](#module_pigalle..Pigalle+initPluginsRegistry) ⇒ <code>Pigalle</code>
            * [.initThirdPartiesRegistry()](#module_pigalle..Pigalle+initThirdPartiesRegistry) ⇒ <code>Pigalle</code>
            * [.use(plugin, [alias])](#module_pigalle..Pigalle+use) ⇒ <code>Pigalle</code>
            * [.registerPlugin(plugin, alias)](#module_pigalle..Pigalle+registerPlugin) ⇒ <code>Pigalle</code>
            * [.registerPigallePlugin(plugin, alias)](#module_pigalle..Pigalle+registerPigallePlugin) ⇒ <code>Pigalle</code>
            * [.registerThirdPartyPlugin(plugin, alias)](#module_pigalle..Pigalle+registerThirdPartyPlugin) ⇒ <code>Pigalle</code>
        * _static_
            * [.importPlugin(o, [options])](#module_pigalle..Pigalle.importPlugin) ⇒ <code>object</code>
            * [.getPigallePluginClass(plugin)](#module_pigalle..Pigalle.getPigallePluginClass) ⇒ <code>null</code> \| <code>PluginEntity</code>
    * _factory_
        * [~pigalle(...args)](#module_pigalle..pigalle) ⇒ <code>Pigalle</code>

<a name="module_pigalle..Pigalle"></a>

#### pigalle~Pigalle
The {Pigalle} class, which is the entry point of the Pigalle framework.

**Kind**: inner class of [<code>pigalle</code>](#module_pigalle)  
**Access**: public  

* [~Pigalle](#module_pigalle..Pigalle)
    * [new Pigalle(...args)](#new_module_pigalle..Pigalle_new)
    * _instance_
        * [.init()](#module_pigalle..Pigalle+init) ⇒ <code>Pigalle</code>
        * [.initRegistries()](#module_pigalle..Pigalle+initRegistries) ⇒ <code>Pigalle</code>
        * [.initPluginsRegistry()](#module_pigalle..Pigalle+initPluginsRegistry) ⇒ <code>Pigalle</code>
        * [.initThirdPartiesRegistry()](#module_pigalle..Pigalle+initThirdPartiesRegistry) ⇒ <code>Pigalle</code>
        * [.use(plugin, [alias])](#module_pigalle..Pigalle+use) ⇒ <code>Pigalle</code>
        * [.registerPlugin(plugin, alias)](#module_pigalle..Pigalle+registerPlugin) ⇒ <code>Pigalle</code>
        * [.registerPigallePlugin(plugin, alias)](#module_pigalle..Pigalle+registerPigallePlugin) ⇒ <code>Pigalle</code>
        * [.registerThirdPartyPlugin(plugin, alias)](#module_pigalle..Pigalle+registerThirdPartyPlugin) ⇒ <code>Pigalle</code>
    * _static_
        * [.importPlugin(o, [options])](#module_pigalle..Pigalle.importPlugin) ⇒ <code>object</code>
        * [.getPigallePluginClass(plugin)](#module_pigalle..Pigalle.getPigallePluginClass) ⇒ <code>null</code> \| <code>PluginEntity</code>

<a name="new_module_pigalle..Pigalle_new"></a>

##### new Pigalle(...args)
Create a new instance of {Pigalle}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="module_pigalle..Pigalle+init"></a>

##### pigalle.init() ⇒ <code>Pigalle</code>
Run necessary tasks to init the {Pigalle} instance.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Access**: public  
<a name="module_pigalle..Pigalle+initRegistries"></a>

##### pigalle.initRegistries() ⇒ <code>Pigalle</code>
Initialize the registries.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance.  
**Access**: public  
<a name="module_pigalle..Pigalle+initPluginsRegistry"></a>

##### pigalle.initPluginsRegistry() ⇒ <code>Pigalle</code>
Initialize the plugins registry.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance.  
**Access**: public  
<a name="module_pigalle..Pigalle+initThirdPartiesRegistry"></a>

##### pigalle.initThirdPartiesRegistry() ⇒ <code>Pigalle</code>
Initialize the third-parties registry.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance.  
**Access**: public  
<a name="module_pigalle..Pigalle+use"></a>

##### pigalle.use(plugin, [alias]) ⇒ <code>Pigalle</code>
Use a plugin for the Pigalle framework.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance of {Pigalle}.  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>string</code> \| <code>object</code> | The plugin name or the plugin object. |
| [alias] | <code>string</code> | Optional alias. |

<a name="module_pigalle..Pigalle+registerPlugin"></a>

##### pigalle.registerPlugin(plugin, alias) ⇒ <code>Pigalle</code>
Store a third-party or Pigalle plugin into the plugins registry.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance of Pigalle class.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>object</code> | An instance of plugin. |
| alias | <code>string</code> | Alias to access plugin. |

<a name="module_pigalle..Pigalle+registerPigallePlugin"></a>

##### pigalle.registerPigallePlugin(plugin, alias) ⇒ <code>Pigalle</code>
Store a Pigalle plugin into the Pigalle plugins registry.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance of Pigalle class.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>object</code> | An instance of plugin. |
| alias | <code>string</code> | Alias to access plugin. |

<a name="module_pigalle..Pigalle+registerThirdPartyPlugin"></a>

##### pigalle.registerThirdPartyPlugin(plugin, alias) ⇒ <code>Pigalle</code>
Store a third-party plugin into the third-parties registry.

**Kind**: instance method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>Pigalle</code> - The current instance of Pigalle class.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>object</code> | An instance of plugin. |
| alias | <code>string</code> | Alias to access plugin. |

<a name="module_pigalle..Pigalle.importPlugin"></a>

##### Pigalle.importPlugin(o, [options]) ⇒ <code>object</code>
Import a plugin (third-party or Pigalle plugin).

**Kind**: static method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>object</code> - An instance of plugin.  
**Access**: public  
**Todo**

- [ ] Externalize this static method to an helper module for Pigalle plugins.


| Param | Type | Description |
| --- | --- | --- |
| o | <code>string</code> \| <code>object</code> | Two ways:   * If string: the name of plugin.   * If object: a class or an instance of class. |
| [options] | <code>object</code> | Optional options to pass to the constructor if provided plugin is a class. |

<a name="module_pigalle..Pigalle.getPigallePluginClass"></a>

##### Pigalle.getPigallePluginClass(plugin) ⇒ <code>null</code> \| <code>PluginEntity</code>
Lookup a module and find the Pigalle plugin class if exists.
If not exists, return {null}.

**Kind**: static method of [<code>Pigalle</code>](#module_pigalle..Pigalle)  
**Returns**: <code>null</code> \| <code>PluginEntity</code> - An instance of derived class of {PluginEntity} if founded. {null} else.  
**Access**: public  
**Todo**

- [ ] Externalize this static method to an helper module for Pigalle plugins.


| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>\*</code> | The module to analyze. |

<a name="module_pigalle..pigalle"></a>

#### pigalle~pigalle(...args) ⇒ <code>Pigalle</code>
A factory function to create an instance of {Pigalle}.

**Kind**: inner method of [<code>pigalle</code>](#module_pigalle)  
**Returns**: <code>Pigalle</code> - A instance of {Pigalle} class.  
**Category**: factory  
**Access**: public  

| Param | Description |
| --- | --- |
| ...args | The arguments. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Mon, 26 Feb 2018 16:04:30 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
