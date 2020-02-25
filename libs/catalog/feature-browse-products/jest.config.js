module.exports = {
  name: 'catalog-feature-browse-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/feature-browse-products',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
