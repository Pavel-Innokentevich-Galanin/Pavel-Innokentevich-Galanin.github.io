## Дерево проекта

```bash
tree --charset ascii -I "node_modules"
```

```
.
|-- docker-compose.yml      # Настройки Docker
|-- LICENSE                 # Лицензия репозитория
|-- package.json            # Пакеты NPM
|-- package-lock.json
|-- public                  # Файлы с папки попадут в корень сайта
|   `-- *
|-- README*.md              # Информация о репозитории
|-- src                     # Исходный код проекта
|   |-- components          # Компоненты React
|   |   `-- *
|   |       `-- *.jsx
|   `-- index.js            # Точка входа Webpack
`-- yarn.lock
```

## Начать пользоваться репозиторием

Увеличиваем количество watch:

```bash
sudo sysctl -w fs.inotify.max_user_watches=100000
```

Устанавливаем NPM пакеты:

```bash
sudo docker-compose run node /bin/bash
npm i
exit
sudo docker-compose down
```

Запускаем сервер:

```bash
sudo docker-compose up
```
