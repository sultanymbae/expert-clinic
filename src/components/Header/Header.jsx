import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>Пн-Пт: 8:00-20:00, Сб: 9:00-18:00</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+996 (312) 123-456</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl text-blue-700 font-bold">Expert Clinic</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">О клинике</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-700 transition-colors">Врачи</a>
            <a href="#advantages" className="text-gray-700 hover:text-blue-700 transition-colors">Преимущества</a>
            <a href="#prices" className="text-gray-700 hover:text-blue-700 transition-colors">Цены</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-700 transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">Контакты</a>
          </nav>
          
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors">
            Записаться на прием
          </button>
        </div>
      </div>
    </header>
  );
}