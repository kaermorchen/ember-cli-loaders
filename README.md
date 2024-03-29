<h1 align="center">Ember-cli-loaders</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ember-cli-loaders"><img src="https://img.shields.io/npm/v/ember-cli-loaders.svg?style=flat-square&colorB=44cc11" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/ember-cli-loaders"><img src="https://img.shields.io/npm/dm/ember-cli-loaders.svg?style=flat-square" alt="npm monthly downloads"></a>
  <a href="https://emberobserver.com/addons/ember-cli-loaders"><img src="https://emberobserver.com/badges/ember-cli-loaders.svg" alt="Ember Observer Score"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT"></a>
</p>

An [ember-cli](http://www.ember-cli.com) addon for using [Loaders.css](https://connoratherton.com/loaders) in Ember applications.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

### [Demo](https://kaermorchen.github.io/ember-cli-loaders/)

## Getting Started

Install in ember-cli application

```bash
ember install ember-cli-loaders
```

Then include the following in your `app.scss` file:

```scss
@import "ember-cli-loaders/loaders";
```

## How to use

You can use loader's components.

```hbs
<LoaderBallPulse />
<LoaderBallGridPulse />
<LoaderBallClipRotate />
<LoaderBallClipRotatePulse />
<LoaderSquareSpin />
<LoaderBallClipRotateMultiple />
<LoaderBallPulseRise />
<LoaderBallRotate />
<LoaderCubeTransition />
<LoaderBallZigZag />
<LoaderBallZigZagDeflect />
<LoaderBallTrianglePath />
<LoaderBallScale />
<LoaderLineScale />
<LoaderLineScaleParty />
<LoaderBallScaleMultiple />
<LoaderBallPulseSync />
<LoaderBallBeat />
<LoaderLineScalePulseOut />
<LoaderLineScalePulseOutRapid />
<LoaderBallScaleRipple />
<LoaderBallScaleRippleMultiple />
<LoaderLineSpinFadeLoader />
<LoaderTriangleSkewSpin />
<LoaderPacman />
<LoaderSemiCircleSpin />
<LoaderBallGridBeat />
<LoaderBallScaleRandom />
```

## Configuration

### Custom Loaders.css components

For import not all loaders instead of `@import "ember-cli-loaders/loaders";` use code below:

```scss
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

You can use custom Loaders.css [variables](https://github.com/ConnorAtherton/loaders.css/blob/master/src/_variables.scss)

```scss
$primary-color: green;

@import "ember-cli-loaders/loaders";
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

Ember-cli-loaders is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
