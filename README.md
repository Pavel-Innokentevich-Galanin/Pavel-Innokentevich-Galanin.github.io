## Project Tree

```bash
tree --charset ascii -I "node_modules"
```

```
.
|-- docker-compose.yml      # Docker settings
|-- LICENSE                 # Repository license
|-- package.json            # NPM packages
|-- package-lock.json
|-- public                  # Files from the folder will go to the root of the site
|   `-- *
|-- README*.md              # Repository Information
|-- src                     # Project source code
|   |-- components          # React Components
|   |   `-- *
|   |       `-- *.jsx
|   `-- index.js            # Webpack entry point
`-- yarn.lock
```

## Start using the repository

Increasing the number of watch:

```bash
sudo sysctl -w fs.inotify.max_user_watches=100000
```

Installing NPM packages:

```bash
sudo docker-compose run node /bin/bash
npm i
exit
sudo docker-compose down
```

Starting the server:

```bash
sudo docker-compose up
```

## Sending to production

```bash
sudo docker-compose run node /bin/bash
cd /content
rm -rfv build
npm run build
npm run deploy
exit
sudo docker-compose down
```
