/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: '...',
    options: {
      'sonar.projectName': '...',
      'sonar.projectKey': '...',
      'sonar.login': '...',
      'sonar.sources': 'src',
      'sonar.language': 'ts',
      'sonar.typescript.file.suffixes': '.ts,.tsx',
      'sonar.scm.disabled': 'true',
      'sonar.ignore':
        'src/**/*.test.js,src/**/*.spec.js,src/**/*.test.jsx,src/**/*.spec.jsx,android/**,ios/**,node_modules/**'
    }
  },
  () => process.exit()
)
