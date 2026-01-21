export default {
  "*.{jsx,ts,tsx}": ["npm run lint:staged", "prettier --write"],
  "*.{ts,tsx}": () => "npm run type-check",
};
