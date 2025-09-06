import React from 'react';

export function AdvantagesSection() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Современное оборудование",
      description: "УЗИ аппараты экспертного класса последнего поколения"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <polyline points="16,11 18,13 22,9"/>
        </svg>
      ),
      title: "Опытные врачи",
      description: "Специалисты высшей категории с многолетним опытом работы"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "Удобное время",
      description: "Работаем 6 дней в неделю, гибкое расписание приема"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      title: "Комфортная обстановка",
      description: "Современные кабинеты и дружелюбная атмосфера"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      ),
      title: "Точная диагностика",
      description: "Высокая точность результатов благодаря современному оборудованию"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Индивидуальный подход",
      description: "Персональное внимание к каждому пациенту"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему тысячи пациентов выбирают Expert Clinic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}