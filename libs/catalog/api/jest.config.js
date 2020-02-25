module.exports = {
  name: 'catalog-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
