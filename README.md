# 🧪 TypeScript Monorepo Template

A modern, scalable monorepo starter powered by **TypeScript**, **ESLint**, **Prettier**, **Vitest**, **Project References**, and **Renovate**. Designed for high performance, strict typing, and developer productivity.

## 🚀 Features

- **📦 Project References**  
  TypeScript project references for fast, incremental builds and scoped type-checking.

- **🧹 Prettier**  
  Auto-formats your code with consistent style across the monorepo.

- **🔍 ESLint with Type-Aware Rules**  
  Linting powered by `@typescript-eslint` for smarter and safer code, including strict type checking.

- **🧪 Vitest**  
  Blazing-fast unit testing framework with first-class TypeScript support.

- **🔁 Renovate**  
  Automated dependency updates via PRs, keeping your stack always up to date.

## 📦 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Build all projects

```bash
pnpm build
```

### 3. Lint and format

```bash
pnpm lint:fix
pnpm lint:check

pnpm format:fix
pnpm format:check
```

### 4. Run tests

```bash
pnpm test
```

## 📘 Running scripts

In order to build the whole project a simple `pnpm build` is enough. If you want to only build a specific package and its dependencies the following command can be used: `pnpm -r --filter <package>... build`. The `...` notation is a [PNPM filter pattern](https://pnpm.io/filtering) that includes the specified package and all of its dependencies.

## 🛠️ Requirements

- [pnpm](https://pnpm.io/)
- Node.js >= 22.16
