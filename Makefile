install:
	npm ci

brain-games: # Запуск приветсвия
	node bin/brain-games.js

brain-even: # Запуск игры на "Четные числа"
	node bin/brain-even.js

brain-calc: # Запуск игры "Калькулятор"
	node bin/brain-calc.js

brain-gcd: # Запуск игры "Наибольший общий делитель"
	node bin/brain-gcd.js

brain-progression: # Запуск игры "Арифметическая прогрессия"
	node bin/brain-progression.js

brain-prime: # Запуск игры "Простое ли число?"
	node bin/brain-prime.js

check-env:
	node -v

publish:
	npm publish --dry-run

lint:
	npx  eslint .

lint-fix:
	npx eslint . --fix
