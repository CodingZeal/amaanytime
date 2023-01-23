# AMA Anytime

## Ask me anything! Anytime!

---

### Development
```terminal
# start the dev server
yarn rw dev

# first run: in a separate terminal
yarn db:setup
```

---

### Manual Development
```terminal
# start the postgres server
docker compose up <-d> <db|testdb>

# Run prisma migrations
yarn rw prisma migrate dev

# Seed data
yarn rw prisma db seed

# Run the development server
yarn rw dev
```

---

### Testing


```terminal
# both api and web
yarn test

# dont watch, 'CI mode'
yarn test:nowatch

# playwright end to end tests
yarn test:e2e
```

### Storybook

the config files are located in web/config/storybok*
when reading the [storybook docs](https://storybook.js.org/docs/react/get-started/introduction) they will reference config files not found in this project. The list below provides the interface for these. Note: these configs will override any defaults that redwood has set. You can read more [here](https://redwoodjs.com/docs/storybook#getting-started-with-storybook)

- storybook.config.js -> main.js
- storybook.manager.js -> manager.js
- storybook.preview.js -> preview.js

```terminal
# for development run without a cache
yarn rw storybook --no-manager-cache
```

---

### Notes
This project was create from the [Zeal Redwood Template](https://github.com/codingzeal/redwood-template-app). Issues with the template should be directed there.

Tooling
- redwoodjs
- tailwind css
- postgres (w/ docker)
- react-testing-library
- playwright

---
