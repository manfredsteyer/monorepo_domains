module.exports = {
  name: 'catalog-feature-request-product',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/feature-request-product',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
