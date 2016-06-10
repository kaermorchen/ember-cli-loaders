# Ember-cli-loaders

An [ember-cli](http://www.ember-cli.com) addon for using [Loaders.css](https://connoratherton.com/loaders) in Ember applications.

## Getting Started

Install in ember-cli application

```
ember install ember-cli-loaders
```

Then include the following in your `app.scss` file:

```
@import "ember-cli-loaders/loaders";
```

## Configuration

### Custom Loaders.css components

For import not all loaders instead `@import "ember-cli-loaders/loaders";` you can use code below:

```
@import 'ember-cli-loaders/variables';
@import 'ember-cli-loaders/mixins';

/**
 * Dots
 */
@import 'ember-cli-loaders/animations/ball-pulse';
@import 'ember-cli-loaders/animations/ball-pulse-sync';
@import 'ember-cli-loaders/animations/ball-scale';
@import 'ember-cli-loaders/animations/ball-scale-random';
@import 'ember-cli-loaders/animations/ball-rotate';
@import 'ember-cli-loaders/animations/ball-clip-rotate';
@import 'ember-cli-loaders/animations/ball-clip-rotate-pulse';
@import 'ember-cli-loaders/animations/ball-clip-rotate-multiple';
@import 'ember-cli-loaders/animations/ball-scale-ripple';
@import 'ember-cli-loaders/animations/ball-scale-ripple-multiple';
@import 'ember-cli-loaders/animations/ball-beat';
@import 'ember-cli-loaders/animations/ball-scale-multiple';
@import 'ember-cli-loaders/animations/ball-triangle-trace';
@import 'ember-cli-loaders/animations/ball-pulse-rise';
@import 'ember-cli-loaders/animations/ball-grid-beat';
@import 'ember-cli-loaders/animations/ball-grid-pulse';
@import 'ember-cli-loaders/animations/ball-spin-fade-loader';
@import 'ember-cli-loaders/animations/ball-spin-loader';
@import 'ember-cli-loaders/animations/ball-zig-zag';
@import 'ember-cli-loaders/animations/ball-zig-zag-deflect';

/**
 * Lines
 */
@import 'ember-cli-loaders/animations/line-scale';
@import 'ember-cli-loaders/animations/line-scale-random';
@import 'ember-cli-loaders/animations/line-scale-pulse-out';
@import 'ember-cli-loaders/animations/line-scale-pulse-out-rapid';
@import 'ember-cli-loaders/animations/line-spin-fade-loader';

/**
 * Misc
 */
@import 'ember-cli-loaders/animations/triangle-skew-spin';
@import 'ember-cli-loaders/animations/square-spin';
@import 'ember-cli-loaders/animations/pacman';
@import 'ember-cli-loaders/animations/cube-transition';
@import 'ember-cli-loaders/animations/semi-circle-spin';
```

### Custom variables

You can use custom Loaders.css variables. For this copy `bower_components\loaders.css\src\_variables.scss` in your `app\styles` directory. And add import `variables.scss` in `app.scss`.

```
@import "variables";
@import "ember-cli-loaders/loaders";
```

## How to use

You can use loader's components.

```
{{loader-ball-pulse}}
{{loader-ball-grid-pulse}}
{{loader-ball-clip-rotate}}
{{loader-ball-clip-rotate-pulse}}
{{loader-square-spin}}
{{loader-ball-clip-rotate-multiple}}
{{loader-ball-pulse-rise}}
{{loader-ball-rotate}}
{{loader-cube-transition}}
{{loader-ball-zig-zag}}
{{loader-ball-zig-zag-deflect}}
{{loader-ball-triangle-path}}
{{loader-ball-scale}}
{{loader-line-scale}}
{{loader-line-scale-party}}
{{loader-ball-scale-multiple}}
{{loader-ball-pulse-sync}}
{{loader-ball-beat}}
{{loader-line-scale-pulse-out}}
{{loader-line-scale-pulse-out-rapid}}
{{loader-ball-scale-ripple}}
{{loader-ball-scale-ripple-multiple}}
{{loader-line-spin-fade-loader}}
{{loader-triangle-skew-spin}}
{{loader-pacman}}
{{loader-semi-circle-spin}}
{{loader-ball-grid-beat}}
{{loader-ball-scale-random}}
```

## License
Ember-cli-loaders is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
