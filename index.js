(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('chroma-js')) :
  typeof define === 'function' && define.amd ? define(['chroma-js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VuetifyColorInput = factory(global.chroma));
}(this, (function (chroma) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var chroma__default = /*#__PURE__*/_interopDefaultLegacy(chroma);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function BackgroundPattern (svg, size, color) {
    return {
      background: "url('data:image/svg+xml;base64,".concat(btoa(svg), "') center center / ").concat(size, "px ").concat(size, "px repeat ").concat(color)
    };
  }

  function BackgroundCheckered (gridSize, gridColor0, gridColor1) {
    var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill=\"".concat(gridColor0, "\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>");
    var size = gridSize * 2;
    return BackgroundPattern(svg, size, gridColor1);
  }

  var InteractivityNone = {
    pointerEvents: 'none',
    userDrag: 'none',
    userSelect: 'none'
  };

  var PositionAbsolute = {
    position: 'absolute'
  };

  var PositionCover = _objectSpread2(_objectSpread2({}, PositionAbsolute), {}, {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  });

  var PositionRelative = {
    position: 'relative'
  };

  var RoundedFull = {
    borderRadius: '9999px'
  };

  var Transition = {
    transition: 'all .3s cubic-bezier(.25,.8,.5,1)'
  };

  var _default = /*#__PURE__*/function () {
    function _default(r, g, b, a) {
      _classCallCheck(this, _default);

      Object.assign(this, {
        r: r,
        g: g,
        b: b,
        a: a
      });
    }

    _createClass(_default, [{
      key: "toObject",
      value: function toObject(format, noAlpha) {
        var _this = this;

        var result = function () {
          var r = _this.r,
              g = _this.g,
              b = _this.b,
              a = _this.a;

          switch (format) {
            case 'hsl':
              {
                var _chroma$hsl = chroma__default['default']({
                  r: r,
                  g: g,
                  b: b,
                  a: _a
                }).hsl(),
                    h = _chroma$hsl.h,
                    s = _chroma$hsl.s,
                    l = _chroma$hsl.l,
                    _a = _chroma$hsl.a;

                return {
                  h: h,
                  s: s,
                  l: l,
                  a: _a
                };
              }

            case 'hsv':
              {
                var _chroma$hsv = chroma__default['default']({
                  r: r,
                  g: g,
                  b: b,
                  a: _a2
                }).hsv(),
                    _h = _chroma$hsv.h,
                    _s = _chroma$hsv.s,
                    v = _chroma$hsv.v,
                    _a2 = _chroma$hsv.a;

                return {
                  h: _h,
                  s: _s,
                  v: v,
                  a: _a2
                };
              }
          }

          return {
            r: r,
            g: g,
            b: b,
            a: a
          };
        }();

        if (noAlpha) {
          delete result.a;
        }

        return result;
      }
    }, {
      key: "toString",
      value: function toString(format) {
        var r = this.r,
            g = this.g,
            b = this.b,
            a = this.a;

        switch (format) {
          case 'hex':
            {
              return chroma__default['default']({
                r: r,
                g: g,
                b: b,
                a: a
              }).hex();
            }

          case 'rgb':
            {
              return chroma__default['default']({
                r: r,
                g: g,
                b: b,
                a: a
              }).css();
            }
        }

        return a < 1 ? chroma__default['default']({
          r: r,
          g: g,
          b: b,
          a: a
        }).css() : chroma__default['default']({
          r: r,
          g: g,
          b: b,
          a: a
        }).hex();
      }
    }], [{
      key: "from",
      value: function from(value) {
        var _chroma$rgba = chroma__default['default'](value).rgba(),
            _chroma$rgba2 = _slicedToArray(_chroma$rgba, 4),
            r = _chroma$rgba2[0],
            g = _chroma$rgba2[1],
            b = _chroma$rgba2[2],
            a = _chroma$rgba2[3];

        a = Number(a.toFixed(3));
        return new this(r, g, b, a);
      }
    }]);

    return _default;
  }();

  var isArray = Array.isArray;

  var isEqual = Object.is;

  function isObject (value) {
    if (value) {
      var type = _typeof(value);

      return type === 'object' || type === 'function';
    }

    return false;
  }

  function isDeepEqual(value, otherValue) {
    if (isEqual(value, otherValue)) {
      return true;
    }

    if (isArray(value)) {
      if (isArray(otherValue)) {
        var length = value.length;
        var otherLength = otherValue.length;

        if (length === otherLength) {
          for (var i = 0; i < length; i++) {
            if (!isDeepEqual(value[i], otherValue[i])) {
              return false;
            }
          }

          return true;
        }
      }
    } else if (isObject(value)) {
      if (isObject(otherValue)) {
        var keys = Object.keys(value).sort();
        var otherKeys = Object.keys(otherValue).sort();

        if (isDeepEqual(keys, otherKeys)) {
          value = keys.map(function (k) {
            return value[k];
          });
          otherValue = keys.map(function (k) {
            return otherValue[k];
          });

          if (isDeepEqual(value, otherValue)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  var Component = {
    name: 'VColorInput',
    inject: {
      theme: {
        "default": {
          isDark: false
        }
      }
    },
    props: {
      appendIcon: String,
      canvasHeight: {
        type: [String, Number]
      },
      disabled: Boolean,
      error: Boolean,
      errorCount: {},
      errorMessages: {},
      hideDetails: [Boolean, String],
      hint: {},
      id: {},
      label: String,
      messages: {},
      noAlpha: Boolean,
      persistentHint: Boolean,
      prependIcon: {},
      rules: {},
      success: Boolean,
      successMessages: {},
      validateOnBlur: Boolean,
      value: {},
      dotSize: {
        type: [Number, String]
      },
      hideCanvas: Boolean,
      hideInputs: Boolean,
      hideModeSwitch: Boolean,
      hideSliders: Boolean,
      mode: {
        type: String,
        "default": 'hex'
      },
      showSwatches: Boolean,
      swatches: Array,
      swatchesMaxHeight: {
        type: [Number, String]
      }
    },
    data: function data() {
      var value = this.value;
      return {
        fallbackValue: {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        },
        format: 'string',
        lazyValue: value,
        mandatory: false,
        menuActive: false,
        validationState: undefined
      };
    },
    computed: {
      dark: function dark() {
        return this.theme.isDark;
      },
      internalValue: {
        get: function get() {
          return this.getValue(this.format, this.mandatory);
        },
        set: function set(value) {
          this.lazyValue = value;
        }
      },
      modeForColorPicker: {
        get: function get() {
          var value = this.mode;

          switch (value) {
            case 'hex':
              {
                return 'hexa';
              }

            case 'hsl':
              {
                return 'hsla';
              }

            case 'rgb':
              {
                return 'rgba';
              }
          }

          return value;
        },
        set: function set(value) {
          value = function () {
            switch (value) {
              case 'hexa':
                {
                  return 'hex';
                }

              case 'hsla':
                {
                  return 'hsl';
                }

              case 'rgba':
                {
                  return 'rgb';
                }
            }

            return value;
          }();

          this.$emit('update:mode', value);
        }
      },
      valueAsString: function valueAsString() {
        return this.getValue('string', true);
      },
      valueForColorPicker: function valueForColorPicker() {
        return this.getValue('object.rgb', true);
      }
    },
    watch: {
      internalValue: {
        handler: function handler(value, oldValue) {
          if (!isDeepEqual(value, oldValue)) {
            this.$emit('input', value);
          }
        },
        immediate: true
      },
      value: function value(_value) {
        this.lazyValue = _value;
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.$watch(function () {
        return _this.$refs['input'].validationState;
      }, function (value) {
        _this.validationState = value;
      }, {
        immediate: true
      });
    },
    methods: {
      getValue: function getValue(format, mandatory) {
        var value = this.lazyValue;

        if (!value) {
          if (!mandatory) {
            return null;
          }

          value = this.fallbackValue;
        }

        var instance = _default.from(value);
        var noAlpha = this.noAlpha;

        if (noAlpha) {
          instance.a = 1;
        }

        switch (format) {
          case 'object.hsl':
            {
              return instance.toObject('hsl', noAlpha);
            }

          case 'object.hsv':
            {
              return instance.toObject('hsv', noAlpha);
            }

          case 'object.rgb':
            {
              return instance.toObject('rgb', noAlpha);
            }

          case 'string.hex':
            {
              return instance.toString('rgb');
            }

          case 'string.rgb':
            {
              return instance.toString('hex');
            }
        }

        return instance.toString();
      },
      clear: function clear() {
        this.internalValue = null;
      }
    },
    render: function render(h) {
      var _this2 = this;

      var $scopedSlots = this.$scopedSlots,
          appendIcon = this.appendIcon,
          canvasHeight = this.canvasHeight,
          clear = this.clear,
          dark = this.dark,
          disabled = this.disabled,
          dotSize = this.dotSize,
          error = this.error,
          errorCount = this.errorCount,
          errorMessages = this.errorMessages,
          hideCanvas = this.hideCanvas,
          hideDetails = this.hideDetails,
          hideInputs = this.hideInputs,
          hideModeSwitch = this.hideModeSwitch,
          hideSliders = this.hideSliders,
          hint = this.hint,
          id = this.id,
          value = this.internalValue,
          label = this.label,
          menuActive = this.menuActive,
          messages = this.messages,
          modeForColorPicker = this.modeForColorPicker,
          persistentHint = this.persistentHint,
          prependIcon = this.prependIcon,
          rules = this.rules,
          showSwatches = this.showSwatches,
          success = this.success,
          successMessages = this.successMessages,
          swatches = this.swatches,
          swatchesMaxHeight = this.swatchesMaxHeight,
          validateOnBlur = this.validateOnBlur,
          validationState = this.validationState,
          valueForColorPicker = this.valueForColorPicker;
      return h('VInput', {
        props: {
          appendIcon: appendIcon,
          disabled: disabled,
          error: error,
          errorCount: errorCount,
          errorMessages: errorMessages,
          hideDetails: hideDetails,
          hint: hint,
          id: id,
          messages: messages,
          persistentHint: persistentHint,
          prependIcon: prependIcon,
          rules: rules,
          success: success,
          successMessages: successMessages,
          validateOnBlur: validateOnBlur,
          value: value
        },
        on: {
          'click:append': function clickAppend() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this2.$emit.apply(_this2, ['click:append'].concat(args));
          },
          'click:prepend': function clickPrepend() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this2.$emit.apply(_this2, ['click:prepend'].concat(args));
          },
          'update:error': function updateError() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this2.$emit.apply(_this2, ['update:error'].concat(args));
          }
        },
        scopedSlots: {
          'append': $scopedSlots['append'],
          'message': $scopedSlots['message'],
          'prepend': $scopedSlots['prepend']
        },
        ref: 'input'
      }, [h('VMenu', {
        ref: 'menu',
        props: {
          closeOnContentClick: false,
          disabled: disabled,
          offsetY: true,
          value: menuActive
        },
        on: {
          'input': function input(value) {
            _this2.menuActive = value;
          }
        },
        scopedSlots: {
          'activator': function activator(_ref) {
            var attrs = _ref.attrs,
                on = _ref.on;
            return h('div', {
              attrs: attrs,
              on: on
            }, [h('div', {
              style: _objectSpread2(_objectSpread2({}, InteractivityNone), {}, {
                alignItems: 'center',
                display: 'grid',
                gap: '8px',
                gridTemplateColumns: 'auto 1fr'
              })
            }, [h('div', {
              "class": validationState,
              style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, PositionRelative), RoundedFull), Transition), {}, {
                backgroundColor: 'transparent !important',
                borderColor: disabled ? dark ? 'hsla(0,0%,100%,.3)' : 'rgba(0,0,0,.26)' : dark ? '#fff' : 'rgba(0,0,0,.54)',
                borderStyle: 'solid',
                borderWidth: '2px',
                height: '24px',
                overflow: 'hidden',
                width: '24px'
              })
            }, [h('div', {
              style: {
                position: 'absolute',
                bottom: '-4px',
                left: '-4px',
                right: '-4px',
                top: '-4px'
              }
            }, [h('div', {
              style: _objectSpread2(_objectSpread2({}, PositionCover), dark ? BackgroundCheckered(8, '#fff', '#000') : BackgroundCheckered(8, '#f00', '#0f0'))
            }), h('div', {
              style: _objectSpread2(_objectSpread2({}, PositionCover), {}, {
                backgroundColor: _this2.valueAsString
              })
            })])])].concat(_toConsumableArray(function () {
              var content;
              var slot = $scopedSlots['label'];

              if (slot) {
                content = slot();
              } else {
                if (label) {
                  content = label;
                } else {
                  return [];
                }
              }

              return [h('div', [h('VLabel', {
                props: {
                  color: validationState,
                  disabled: disabled,
                  focused: !!validationState
                }
              }, content)])];
            }())))]);
          },
          'default': function _default() {
            return h('VCard', [h('VColorPicker', {
              props: {
                canvasHeight: canvasHeight,
                disabled: disabled,
                dotSize: dotSize,
                flat: true,
                hideCanvas: hideCanvas,
                hideInputs: hideInputs,
                hideModeSwitch: hideModeSwitch,
                hideSliders: hideSliders,
                mode: modeForColorPicker,
                showSwatches: showSwatches,
                swatches: swatches,
                swatchesMaxHeight: swatchesMaxHeight,
                value: valueForColorPicker
              },
              on: {
                'input': function input(value) {
                  _this2.internalValue = value;
                },
                'update:mode': function updateMode(value) {
                  _this2.modeForColorPicker = value;
                }
              }
            })].concat(_toConsumableArray(function () {
              var slot = $scopedSlots['actions'];

              if (slot) {
                return [h('VCardActions', slot({
                  clear: clear
                }))];
              }

              return [];
            }())));
          }
        }
      })]);
    }
  };

  var _globalThis$window, _globalThis$window$Vu;
  (_globalThis$window = globalThis.window) === null || _globalThis$window === void 0 ? void 0 : (_globalThis$window$Vu = _globalThis$window.Vue) === null || _globalThis$window$Vu === void 0 ? void 0 : _globalThis$window$Vu.component(Component.name, Component);

  return Component;

})));
