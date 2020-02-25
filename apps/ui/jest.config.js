module.exports = {
  name: 'ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui/',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
