# AMA Anytime

## Ask me anything! Anytime!

This project was create from the [Zeal Redwood Template](https://github.com/codingzeal/redwood-template-app). Issues with the template should be directed there.

Tooling
- [RedwoodJS](https://redwoodjs.com/)
  - [TypeScript](https://redwoodjs.com/docs/typescript/index)
  - [Prisma](https://redwoodjs.com/docs/schema-relations) (ORM & Migrations)
  - [GraphQL](https://redwoodjs.com/docs/graphql)
  - [Self Hosted Auth](https://redwoodjs.com/docs/auth/dbauth)
  - [Router](https://redwoodjs.com/docs/router)
  - [Storybook](https://redwoodjs.com/docs/storybook)
  - [Testing](https://redwoodjs.com/docs/testing) (w/[react-testing-library](https://testing-library.com/docs/react-testing-library/intro/))
- [Heroku Deployment](https://www.heroku.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostgreSQL](https://www.postgresql.org/) (w/ [Docker](https://www.docker.com/))
- [Playwright](https://playwright.dev/) (End-to-End testing)

Features
- [Role Based Authorization Control (RBAC)](https://redwoodjs.com/docs/how-to/role-based-access-control-rbac)
- [File Uploads](https://redwoodjs.com/docs/how-to/file-uploads)
- [Auth Emails](https://redwoodjs.com/docs/how-to/sending-emails)
- Sign-Up Email Verification
- Administration System

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
