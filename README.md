# Подготовка работы с проектом

1. Установи зависимости проекта в терминале командой `npm install` .
2. Запусти режим разработки, выполнив команду `npm start`.
3. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.
4. Для остановки сборки нажать сочетание клавиш Ctrl + C.

## Порядок работы

- Вся работа выполняется на базе ветки "dev" (в main будут мержиться
  промежуточные стабильные результаты работы и финал проекта)
- Выполнение любого задания выполняется в отдельно созданной ветке, именованой
  по роли задания "feature/название" или "bugfix/название"

- Перед началом работы и созданием новой ветки, следует обновить локальные
  данные относительно удалённого репозитория на Github:
  - в Github Desktop нажать кнопку Fetch и Pull (если есть)
  - в терминале последовательно выполнить команды git fetch, git pull origin dev
- Создавать ветку следует убедившись, что в данный момент вы находитесь в ветке
  "dev" (или переключившись на неё, если это не так)

- Для создания ветки:

  - в Github Desktop нажать кнопку Branch/Ветка и в контекстном меню выбрать
    пункт New branch/Новая ветка
  - в терминале для работы с ветками есть несколько команд:
    - git branch - показать текущую ветк
    - git branch add имя ветки - создать ветку
    - git checkout имя ветки - перейти на данную ветку
    - git checkout -b имя ветки - создать и сразу перейти на данную ветку

- Для повседневной работы наиболее необходимые команды:

  - git status - проверка какие файлы были изменены
  - git add . - добавление
  - git commit -m "имя коммита"
  - git push

- Перед тем, как пушить свою работу, следует подтянуть данные с удаленного
  репозитория:

  - перейти на ветку dev
  - сделать pull всех изменений (git pull origin dev)
  - перейти в свою рабочую ветку
  - замержить ветку dev в свою рабочую ветку чтобы добавились изменения из
    удаленного репозитория (git merge dev)
  - решить конфликты, если таковые имеются

- Для мержа выполненой работы:

  - в Github Desktop:
    - убедиться, что находишься в ветке, куда хочешь слить (или перейти в неё)
    - открыть меню с отображением веток
    - нажать Choose a branch to merge into
    - выбрать ветку, которую нужно слить и нажать Merge
  - в терминале:
    - убедиться, что находишься в ветке, куда хочешь слить (или перейти в неё)
    - git merge имя ветки, которую нужно слить

- Для Pull Request:

  - нажать create pull request/на Github зайти на вкладку Pull Request и нажать
    New pull request
  - выбрать ветку для мержа - dev <--- имя рабочей ветки
  - дать название по имени рабочей ветки
  - дать описание того, что было сделано
  - нажать Create pull request
  - выбрать справа минимум 1 человека для review

### Merge pull request после одобренного review нажимает только team lead или scrum master

- После Pull Request удалить локальную ветку, в которой велась работа
  - в Github Desktop:
    - убедиться, что находишься в ветке, которую хочешь удалить
    - нажать кнопку Branch/Ветка и в контекстном меню выбрать Delete/Удалить
    - поставить галочку, что ветку нужно удалить и локально, и удаленно
    - нажать Delete/Удалить
  - в терминале:
    - git branch -d название ветки - удалить локальную ветку
    - git push origin --delete название ветки - удалить ветку в репозитории

#### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.
