import React from "react";

export default function AdminHomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Главная</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">85</h2>
          <p>Статьи</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">18</h2>
          <p>Категории</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">4</h2>
          <p>Пользователи</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">0</h2>
          <p>Непрочитанные заявки</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Последние статьи</h2>
          <ul className="bg-white p-4 rounded-lg shadow">
            <li>Коррупция государству и обществу...</li>
            <li>Новая армия Узбекистана - опора страны...</li>
            <li>Меры по регистрации населения...</li>
            <li>Махалля Хакикат района Мирзаабад...</li>
            <li>Посадка деревьев в рамках проекта...</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Последние страницы</h2>
          <ul className="bg-white p-4 rounded-lg shadow">
            <li>Постоянные члены комиссии</li>
            <li>Реквизиты</li>
            <li>Порядок приема запросов на информацию</li>
            <li>Информация и её виды на веб-сайте</li>
            <li>Медиа-планы</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
