module.exports = {
  name: 'frontend-portal-feature-home',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/portal/feature-home',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
