/* eslint-disable import/no-anonymous-default-export*/
export default {
  displayName: 'shared-ui-components',
  preset: '../../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/shared/ui/components',
};
