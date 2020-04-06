module.exports = {
  name: 'frontend-public-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/public/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
