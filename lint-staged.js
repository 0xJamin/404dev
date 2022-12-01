module.exports = {
  "*.{ts, tsx}": ["lint --max-warnings=0"],
  "*.{ts,tsx,json,css,ts}": ["prettier --write"],
};