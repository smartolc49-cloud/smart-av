// Данные каталога
const catalogData = {
    brands: [
        {
            id: 'smartmedia',
            name: 'SmartMedia',
            description: 'Производитель профессиональных конференц-систем, аудиопроцессоров и смежного оборудования.',
            iconClass: 'fas fa-microchip',
            products: [
                {
                    name: 'CU-600 Центральный блок конференц-системы',
                    description: 'Центральный блок конференц-системы SmartMedia CU-600. Поддержка до 245 микрофонных пультов, матричный процессор аудиосигналов 8x8, цифровая обработка звука DSP и акустическое эхоподавление AEC.',
                    priceUsd: 2987.00,
                    detailUrl: 'https://smart-av.ru/konferenc-sistemy/tsentralniy-blok-konferents-sistemy-smartmedia-cu-600',
                    comparisonUrl: 'https://disk.yandex.ru/i/XBr2ZiaN1QUTSA'
                },
                // ... другие товары SmartMedia
            ]
        },
        {
            id: 'sony',
            name: 'Sony',
            description: 'Оборудование для видеоконференций и профессионального видео.',
            iconClass: 'fas fa-video',
            products: [/*...*/]
        }
        // ... другие бренды
    ]
};

// Функция для отрисовки карточек брендов на главной
function initBrandsPage() {
    const brandsGrid = document.getElementById('brandsGrid');
    if (!brandsGrid) return;
    
    brandsGrid.innerHTML = '';
    catalogData.brands.forEach(brand => {
        const brandCard = document.createElement('a');
        brandCard.href = `${brand.id}.html`; // Ссылка на страницу бренда
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
            <div class="brand-logo">
                <i class="${brand.iconClass}"></i>
            </div>
            <h3>${brand.name}</h3>
            <p>${brand.description.substring(0, 80)}...</p>
        `;
        brandsGrid.appendChild(brandCard);
    });
}
