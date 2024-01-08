---
sidebar_position: 4
---

import APITable from '@site/src/components/APITable';

# Runtime ошибки

## Почему ChartKit генерирует свои исключения?

В ходе исполнения программы может возникать множество разных ошибок, в том числе и по вине некорректных настроек или даных, которые приходят в ChartKit. Для того, чтобы дебаг таких проблем был более прозрачным, ChartKit сам выбрасывает исключения, когда понимает, что компонента не отрисуется и сломается в недрах своего кода или (что еще хуже) - отрисуется некорректно.

Исключение ChartKit - это обертка над нативным объектом [Error](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error), которая добавляет поля `code` и `isCustomError`.

:::info

Все исключения, возникающие внутри компоненты ChartKit, ловятся во внутреннем `ErrorBoundary`.

:::

## Коды ошибок

```mdx-code-block
<APITable>
```

| Код                     | Описание                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| `ERR.CK.NO_DATA`        | Нет данных для отрисовки.                                                                             |
| `ERR.CK.INVALID_DATA`   | Некорректные настройки или данные. С этим кодом ошибки, как правило, идет описание проблемного места. |
| `ERR.CK.UNKNOWN_PLUGIN` | Некорректный `type`. Как правило возникает из-за того, что плагин не был зарегестрирован.             |
| `ERR.CK.UNKNOWN_ERROR`  | Неизвестная ошибка.                                                                                   |

```mdx-code-block
</APITable>
```

## Работа с ошибками

### Колбек `onError`

Вызывается, когда в рамках компонента ChartKit происходит ошибка, которая поднялась до внутреннего `ErrorBoundary`.

:::tip

Этот метод, к примеру, можно использовать для того, чтобы показать информацию о том, что для чарта нет данных и отрисовать инструкцию для того, как эти данные получить.

:::

Пример использования:

```tsx
import {isChartKitError} from "@gravity-ui/chartkit";

...

<ChartKit
  type="d3"
  data={data}
  onError={({error}) => {
    if (isChartKitError(error)) {
        // Тут происходит сужение типа до ChartKitError,
        // поэтому typescript разрешит обратиться к error.code
    }
  }}
/>
```

### Метод `renderError`

Используется для того, чтобы отрисовать пользовательскую компоненту ошибки. По умолчанию показывается текст ошибки.

Пример использования:

```tsx
...

<ChartKit
  type="d3"
  data={data}
  renderError={({message, resetError}) => {
    const handleRetry = () => {
        // Бизнес-логика со стороны приложения, которая поможет собрать данные по-новому
        ...
        // Сброс ошибки в компоненте ChartKit
        resetError();
    };
    return (
        <div>
            <div>{message}</div>
            <button onClick={handleRetry}></button>
        </div>
    );
  }}
/>
```

### Пользовательская генерация ошибки `ChartKitError`

В своем коде также можно выбрасывать `ChartKitError`, указав нужный код и сообщение. Это может быть полезно при написании своего плагина.

Пример использования:

```ts
import {ChartKitError, CHARTKIT_ERROR_CODE} from '@gravity-ui/chartkit';

...

throw new ChartKitError({
    // Тут можно использовать любую строку
    code: CHARTKIT_ERROR_CODE.INVALID_DATA,
    message: 'Некорректные данные',
});
```