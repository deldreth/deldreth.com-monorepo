# deldreth.com monorepo

Todo:

- [x] Stencil
- [x] Storybook
- [ ] HMR for Storybook
- [ ] Storybook runs against components dist

## Storybook Development

Run start in parallel.

```bash
lerna run start --parallel --stream
```

Or start stencil's server and storybook in separate terminals.

```bash
lerna run start --scope components --stream
lerna run storybook --stream
```
