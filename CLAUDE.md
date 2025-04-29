# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `deno task start`: Run the development server
- `deno lint`: Lint the codebase
- `deno fmt`: Format code
- `deno test`: Run tests
- `deno test path/to/test.ts`: Run a single test

## Code Style Guidelines
- Use TypeScript with explicit types for all function parameters and returns
- 2-space indentation in all files
- Use Preact functional components with typed props
- Import order: standard library, external dependencies, internal modules
- Follow Deno conventions for imports (use explicit URLs for external deps)
- Use Twind for styling with class-based approach
- Handle errors with try/catch and meaningful error messages
- Use async/await for asynchronous operations
- Prefix interfaces with 'I' (e.g., IPost)
- Use camelCase for variables and functions, PascalCase for components