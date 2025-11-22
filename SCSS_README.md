# SCSS Setup Guide

Все стили теперь работают через SCSS. Структура организована в модули для удобства поддержки.

## Структура SCSS

```
Projects/Portfolio/scss/
├── style.scss          # Главный файл, импортирует все модули
├── _main.scss          # Основные стили
├── _hero.scss          # Стили главного экрана (две колонки)
├── _portfolio.scss     # Стили карточек портфолио
├── _sections.scss      # Отступы и расположение секций
├── _contact.scss       # Стили секции контактов
├── _loader.scss        # Стили загрузчика
├── _animated-background.scss  # Анимированный фон
├── _buttons.scss       # Стили кнопок и интерактивных элементов
├── _media.scss         # Медиа-запросы (адаптивность)
└── _reviews.scss       # Стили отзывов (если используется)
```

## Команды

### Компиляция SCSS в CSS
```bash
npm run build:css
```

### Автоматическая компиляция при изменении файлов (watch mode)
```bash
npm run watch:css
```

## Как работать со стилями

1. **Редактируйте SCSS файлы** в папке `Projects/Portfolio/scss/`
2. **Запустите компиляцию**: `npm run build:css`
3. **Или используйте watch mode**: `npm run watch:css` (автоматически компилирует при сохранении)

## Важно

- ✅ Все стили должны быть в SCSS файлах
- ✅ Не редактируйте `style.css` напрямую - он генерируется автоматически
- ✅ После изменений в SCSS всегда запускайте компиляцию
- ✅ Используйте watch mode для разработки

## Удаленные файлы

Следующие CSS файлы были удалены, так как их стили перенесены в SCSS:
- `loader.css` → `_loader.scss`
- `animated-background.css` → `_animated-background.scss`
- `contact-enhanced.css` → `_contact.scss`
- `hero-enhanced.css` → `_hero.scss`
- `buttons-fix.css` → `_buttons.scss`
- `hero-two-column.css` → `_hero.scss`
- `portfolio-cards.css` → `_portfolio.scss`
- `sections-fix.css` → `_sections.scss`
- `parallax-hero.css` → удален (параллакс убран)
- `media.css` → `_media.scss`

