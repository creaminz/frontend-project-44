install:
	npm ci

brain-games:
	node bin/brain-games.js

check-env:
	node -v

publish:
	npm publish --dry-run
