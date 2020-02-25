module.exports = {
  name: 'ordering-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ordering/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
