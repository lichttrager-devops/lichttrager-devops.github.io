document.addEventListener("DOMContentLoaded", function() {
    // Элементы для инициализации
    const uidElement = document.querySelector(".uid");
    const deviceInfoElement = document.querySelector(".device-info");
    const deviceOverviewElement = document.getElementById("device-overview");
    const progressBar = document.querySelector(".progress");
    const statusElement = document.querySelector(".status");

    // Функция для генерации уникального идентификатора
    function generateUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Начальная загрузка
    function initialize() {
        // Генерация UID
        uidElement.textContent = "UID: " + generateUID();

        // Состояние устройства
        deviceInfoElement.textContent = "Информация об устройстве: успешная инициализация";

        // Запуск анимации загрузки
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10; // Увеличиваем на 10
            progressBar.style.width = progress + "%";
            if (progress >= 100) {
                clearInterval(interval);
                statusElement.textContent = "Инициализация завершена!";
                deviceOverviewElement.textContent = "Устройство успешно инициализировано.";
            }
        }, 300); // Каждые 300 мс
    }

    // Запуск инициализации
    initialize();
});