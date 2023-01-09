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
