module.exports = {
  name: 'frontend-shared-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/shared/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
