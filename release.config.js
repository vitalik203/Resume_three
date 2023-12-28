module.exports = {
    branches: ['master', 'develop'],
    repositoryUrl: 'https://github.com/vitalik203/Resume_three.git',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
    ],
  };
  