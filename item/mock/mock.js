module.exports = {
  rules: [
    {
      pattern: /\/api\/index.php\?rtype=index$/,
      respondwith: './index.json'
    },
     {
      pattern: /\/api\/index.php\?rtype=more$/,
      respondwith: './more.json'
    }
  ]
};
