module.exports = {
  name: 'frontend-public-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/public/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
