# Chemistry APP - Peek Peek
```
peek means 'act' in Nahuatl.
therefore peek peek means 'react', right?
```

## Install Dependencies
Make sure you have node, npm, nvm (to manage node versions), and yarn (to install dependencies install).

  1. First install nvm (Node Version Manager).

  ```bash
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
  ```

  2. Then run the following command to install node version v6.9.5 which is in the file .nvmrc.

  ```bash
  nvm install
  ```
  Then run nvm use to use the node version specified in .nvmrc (6.9.5).

  3. Then make sure you have the latest version of the yarn package manager (substitute for npm).

  ```bash
  npm install --global yarn
  ```

  4. Then install the projects dependencies with:

  ```bash
  yarn install
  ```

Note: To add new libraries to the project use:

```bash
yarn add <dep>
```

or the following for development only dependencies:

```bash
yarn add <dep> -D
```

