@echo off
call npm install eslint eslint-config-standard eslint-plugin-import eslint-plugin-import eslint-plugin-promise --save-dev
call npm install stylelint stylelint-config-standard --save-dev
call npm i -D jest-junit
call npm install @commitlint/cli @commitlint/config-conventional --save-dev
call npm install lint-staged --save-dev
call npm install husky --save-dev
call npm run prepare
echo "npx lint-staged" > .husky/pre-commit
echo "npx --no -- commitlint --edit" > .husky/commit-msg
pause