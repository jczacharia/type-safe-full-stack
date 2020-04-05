module.exports = {
  name: 'frontend-portal-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/portal/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
