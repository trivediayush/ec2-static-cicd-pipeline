module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
      },
    },
  },
};
