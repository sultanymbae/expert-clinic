import React from 'react';

export function PricesSection() {
  const priceCategories = [
    {
      title: "УЗИ диагностика",
      popular: true,
      services: [
        { name: "УЗИ брюшной полости", price: "1200 сом" },
        { name: "УЗИ малого таза", price: "1000 сом" },
        { name: "УЗИ при беременности", price: "1500 сом" },
        { name: "УЗИ щитовидной железы", price: "800 сом" },
        { name: "Доплерография", price: "1800 сом" }
      ]
    },
    {
      title: "Ведение беременности",
      popular: false,
      services: [
        { name: "Консультация акушера-гинеколога", price: "1500 сом" },
        { name: "Скрининг I триместра", price: "2500 сом" },
        { name: "Скрининг II триместра", price: "2500 сом" },
        { name: "УЗИ 3D/4D", price: "2000 сом" },
        { name: "Ведение беременности (комплекс)", price: "25000 сом" }
      ]
    },
    {
      title: "Гинекология",
      popular: false,
      services: [
        { name: "Консультация гинеколога", price: "1200 сом" },
        { name: "Профилактический осмотр", price: "1000 сом" },
        { name: "Кольпоскопия", price: "1500 сом" },
        { name: "Взятие мазков", price: "500 сом" },
        { name: "Консультация по планированию семьи", price: "1200 сом" }
      ]
    }
  ];

  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Цены на услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные и доступные цены на все медицинские услуги
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {priceCategories.map((category, index) => (
            <div key={index} className={`relative bg-white border-2 rounded-lg p-8 shadow-lg ${category.popular ? 'border-blue-500' : 'border-gray-200'}`}>
              {category.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярно
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-blue-700">{service.price}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${
                category.popular 
                  ? 'bg-blue-700 text-white hover:bg-blue-800' 
                  : 'border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
              }`}>
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}