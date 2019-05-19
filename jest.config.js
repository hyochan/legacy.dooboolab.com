module.exports = {
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/fileTransformer.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '@apis/(.*)': '<rootDir>/src/apis/$1',
    '@screen/(.*)': '<rootDir>/src/screen/$1',
    '@navigation/(.*)': '<rootDir>/src/navigation/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@stores/(.*)': '<rootDir>/src/stores/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@App_dev': '<rootDir>/src/App_dev',
    '@app': '<rootDir>/src/app',
  },
  'coverageDirectory': './coverage/',
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    '/test/',
    'src/models',
    'src/stores',
    'src/utils/Functions',
    'src/utils/Icons',
    'src/ui',
  ],
  'collectCoverage': true,
  'moduleDirectories': [
    'node_modules',
    'src',
  ],
  'setupFiles': [
    './test/jestSetup.ts',
  ],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/fileTransformer.js',
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  'globals': {
    'window': {},
    'ts-jest': {
      'babelConfig': false,
      'tsConfig': 'tsconfig.json',
    },
  },
};
