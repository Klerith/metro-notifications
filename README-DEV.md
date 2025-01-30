## Development

1. Clone the repository
2. Run `npm install`
3. Run the build in watch mode

```
npm link
npm run build -- --watch
```

4. Create a new project and install the library with the linked reference

```
npm link metro-notifications
```

5. Run the new project and test the library

### Note:

When you finished and you wont need the library anymore, you can remove the link with the following command:

```
npm unlink metro-notifications
```
