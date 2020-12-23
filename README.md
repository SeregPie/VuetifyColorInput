# VuetifyColorInput

A color input component for Vuetify.

## demo

[Try it out!](https://seregpie.github.io/VuetifyColorInput/)

## dependencies

- [chroma.js](https://github.com/gka/chroma.js)

## setup

### npm

```shell
npm i vuetify-color-input
```

---

```javascript
import VuetifyColorInput from 'vuetify-color-input';
```

---

Use the treeshaking system.

```javascript
import VuetifyColorInput from 'vuetify-color-input/a-la-carte';
```

### browser

```html
<link
  href="https://unpkg.com/vuetify@2/dist/vuetify.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/vuetify@2/dist/vuetify.min.js"></script>
<script src="https://unpkg.com/chroma-js@2"></script>
<script src="https://unpkg.com/vuetify-color-input"></script>
```

The component is globally available as `VuetifyColorInput`. If Vue is detected, the component is registered automatically.

## usage

Register the component globally.

```javascript
import Vue from 'vue';
import VColorInput from 'vuetify-color-input';

Vue.component(VColorInput.name, VColorInput);
```

*or*

Register the component locally.

```javascript
import VColorInput from 'vuetify-color-input';

export default {
  components: {
    VColorInput,
  },
  // ...
};
```

---

Use the component inside a template.

```html
<v-color-input
  v-model="backgroundColor"
  label="background color"
/>
```

## properties

| name | type | default | description |
| ---: | :--- | :--- | :--- |
| `noAlpha` | `Boolean` | `false` | Removes alpha. |

Inherits from [v-input](https://vuetifyjs.com/api/v-input):
- `appendIcon`
- `disabled`
- `error`
- `errorCount`
- `errorMessages`
- `hideDetails`
- `hint`
- `id`
- `label`
- `messages`
- `persistentHint`
- `prependIcon`
- `rules`
- `success` 
- `successMessages`
- `validateOnBlur`

Inherits from [v-color-picker](https://vuetifyjs.com/api/v-color-picker):
- `value`

## slots

Inherits from [v-input](https://vuetifyjs.com/api/v-input):
- `append`
- `label`
- `message`
- `prepend`

## events

Inherits from [v-input](https://vuetifyjs.com/api/v-input):
- `click:append`
- `click:prepend`
- `update:error`

Inherits from [v-color-picker](https://vuetifyjs.com/api/v-color-picker):
- `input`
