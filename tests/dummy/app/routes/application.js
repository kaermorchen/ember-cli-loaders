import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      'loader-ball-pulse',
      'loader-ball-grid-pulse',
      'loader-ball-clip-rotate',
      'loader-ball-clip-rotate-pulse',
      'loader-square-spin',
      'loader-ball-clip-rotate-multiple',
      'loader-ball-pulse-rise',
      'loader-ball-rotate',
      'loader-cube-transition',
      'loader-ball-zig-zag',
      'loader-ball-zig-zag-deflect',
      'loader-ball-triangle-path',
      'loader-ball-scale',
      'loader-line-scale',
      'loader-line-scale-party',
      'loader-ball-scale-multiple',
      'loader-ball-pulse-sync',
      'loader-ball-beat',
      'loader-line-scale-pulse-out',
      'loader-line-scale-pulse-out-rapid',
      'loader-ball-scale-ripple',
      'loader-ball-scale-ripple-multiple',
      'loader-ball-spin-fade-loader',
      'loader-line-spin-fade-loader',
      'loader-triangle-skew-spin',
      'loader-pacman',
      'loader-ball-grid-beat',
      'loader-semi-circle-spin',
    ];
  }
}
