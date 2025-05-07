import React from 'react';

/* Hybrid Embedded Routing - Гибридная встроенная маршрутизация */

/*
HER реализует гибридный подход к навигации, комбинируя embedded-логику 
(встроенную в компоненты) с динамическим роутингом без перезагрузки страницы.

Простым языком - если для навигации внутри React приложения нельзя использовать ReactRouter,
то используйте HER, передавая адрес как GET параметры

Клик - смена адреса и переход
Клик средней кнопкой - открытие в новом окне
*/

const Her = ({ href, target = '_self', tab = null, children, onClick }) => {
  const handleClick = (e) => {
    // Если есть внешний обработчик, вызываем его
    if (onClick) {
      onClick(e);
    }

    // Определяем тип клика
    const isMiddleButton = e.button === 1;
    const isModifierKey = e.ctrlKey || e.metaKey;
    const isBlankTarget = target.toLowerCase() === '_blank' || target.toLowerCase() === 'blank';
    
    if (isMiddleButton || isModifierKey || isBlankTarget) {
      // Для новых окон/вкладок
      const newUrl = `${window.location.origin}${window.location.pathname}?location=${encodeURIComponent(href)}`;
      window.open(newUrl, '_blank');
    } else {
      // Для обычного клика
      e.preventDefault();
      
      // Обновляем URL
      const newUrl = `${window.location.origin}${window.location.pathname}?location=${encodeURIComponent(href)}`;
      window.history.pushState({}, '', newUrl);
      
      // Здесь нужно обновить состояние в вашем stateProvider
      // Например: stateProvider.setLocation(href);
      
      // Эмулируем событие изменения роута
      window.dispatchEvent(new Event('popstate'));
    }
  };

  return (
    <a
      href={`?location=${encodeURIComponent(href)}`}
      target={target}
      onClick={handleClick}
      onAuxClick={handleClick} // Обработчик средней кнопки мыши
    >
      {children}
    </a>
  );
};

export default Her;