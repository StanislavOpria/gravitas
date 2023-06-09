const special = require('./scripts/stylelint/groups/special');
const positioning = require('./scripts/stylelint/groups/positioning');
const boxModel = require('./scripts/stylelint/groups/boxModel');
const typography = require('./scripts/stylelint/groups/typography');
const visual = require('./scripts/stylelint/groups/visual');
const animation = require('./scripts/stylelint/groups/animation');
const misc = require('./scripts/stylelint/groups/misc');

const borderInBoxModel = false;

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
    'selector-class-pattern': '^([A-Z][a-zA-Z0-9_]+|^Mui-[a-zA-Z]+$)$',
    'custom-property-pattern': '^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
    'color-hex-length': 'long',
    'string-quotes': 'double',
    'font-family-name-quotes': 'always-unless-keyword',
    'selector-attribute-quotes': 'always',
    'max-empty-lines': 1,
    'declaration-empty-line-before': [
      'never',
      {
        except: [],
      },
    ],
    'color-named': [
      'never',
      {
        message: 'hex|rgb e.t.c. format are easier to distinguish from numbers',
      },
    ],
    'color-hex-case': [
      'lower',
      {
        message: 'Lowercase letters are easier to distinguish from numbers',
      },
    ],
    indentation: 2,
    'order/properties-order': [
      ['Special', special],
      ['Positioning', positioning],
      ['Box Model', boxModel({ border: borderInBoxModel })],
      ['Typography', typography],
      ['Visual', visual({ border: !borderInBoxModel })],
      ['Animation', animation],
      ['Misc', misc],
    ].map(([groupName, properties]) => ({
      groupName,
      emptyLineBefore: 'never',
      properties,
    })),
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
  },
};
