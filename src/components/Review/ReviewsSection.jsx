import React from 'react';

export function ReviewsSection() {
  const reviews = [
    {
      name: "Асель Турдубекова",
      avatar: "А",
      rating: 5,
      date: "2 недели назад",
      text: "Отличная клиника! Прошла полное УЗИ обследование. Врачи очень внимательные и профессиональные. Современное оборудование дает точные результаты. Рекомендую всем!"
    },
    {
      name: "Жанар Кадырова",
      avatar: "Ж",
      rating: 5,
      date: "1 месяц назад",
      text: "Наблюдалась в Expert Clinic всю беременность. Врачи замечательные, всегда все подробно объясняли, отвечали на все вопросы. Очень благодарна за профессиональный подход!"
    },
    {
      name: "Нурия Омарова",
      avatar: "Н",
      rating: 5,
      date: "3 недели назад",
      text: "Проходила гинекологический осмотр. Очень довольна качеством обслуживания. Врач провела тщательный осмотр, дала полезные рекомендации. Клиника очень чистая и уютная."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы пациентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о нас наши пациенты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}