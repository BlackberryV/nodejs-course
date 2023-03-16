1. setTimeout() та setInterval() - це функції в JavaScript, які використовуються для виконання функцій або коду з певним інтервалом часу.

Основна різниця між цими функціями полягає в тому, що setTimeout() запускає виконання функції один раз через певний інтервал часу, тоді як setInterval() запускає виконання функції кожен раз після завершення попереднього виконання через певний інтервал часу.



2.Блокуючий код - це код, який зупиняє виконання програми або потоку виконання до завершення певної операції або отримання відповіді на запит. Найчастіше блокуючий код пов'язаний з операціями введення/виведення, наприклад, чекання на завантаження файлу з диска або чекання на відповідь від сервера.


3.Асинхронне читання з диску в Node.js має кілька переваг перед синхронним читанням:

Не блокує потік виконання: Асинхронне читання з диску не блокує потік виконання, що дозволяє програмі продовжувати виконання інших операцій, тоді як читання з диску виконується в фоновому режимі. Це дозволяє зменшити час очікування та збільшити продуктивність програми.

Зменшує час відгуку: Оскільки асинхронне читання з диску відбувається в фоновому режимі, це зменшує час відгуку програми та забезпечує більш швидку відповідь на запити.

Краще масштабування: Асинхронне читання з диску дозволяє краще масштабувати програму, оскільки не блокує потік виконання та дозволяє продовжувати виконання інших операцій. Це забезпечує кращу продуктивність та можливість обробки більшої кількості запитів одночасно.

Зменшує ймовірність збоїв: Оскільки асинхронне читання з диску не блокує потік виконання, це зменшує ймовірність збоїв та виключень, пов'язаних з блокуванням потоку виконання.


4.Callback API, Promise API та async/await є три підходи для роботи з асинхронним кодом в JavaScript.

Callback API: Callback - це функція, яка передається як аргумент іншої функції та викликається зверху зворотнього виклику. Це підхід, в якому функція приймає колбек-функцію як аргумент, яка буде викликана, коли асинхронна операція буде завершена. Callback API є основним підходом в старіших версіях Node.js та JavaScript.

Promise API: Це підхід, в якому Promise є об'єктом, що представляє не виконану асинхронну операцію, що повертається з функції. Promise може бути в станах виконання, виконаний або відхиленим. За допомогою методів .then() та .catch() обробляються результати виконання або помилки відповідно.Promise API все ще має деякі обмеження, наприклад, неможливість відмінити або припинити асинхронну операцію під час її виконання.

async/await: Це синтаксичний цукор над Promise API, що дозволяє робити асинхронний код більш читабельним та дозволяє використовувати блоки try-catch для обробки помилок. async оголошує функцію як асинхронну, а await очікує, поки асинхронна операція буде виконана та поверне результат. async/await роблять код більш читабельним та допомагають уникнути підводних каменів колбек-функцій та Promise-ланцюгів.


5.При використанні Promise API помилки можна обробляти за допомогою методу .catch(). Якщо Promise відхилено, метод .catch() виконується, дозволяючи програмісту обробити помилку та виконати необхідні дії.


6.Для створення директорії  можна використати модуль fs та його метод mkdir(). mkdir() приймає два параметри - шлях до нової директорії та функцію зворотного виклику, яка виконається після спроби створення директорії. Якщо при спробі створення директорії виникне помилка, то err буде містити інформацію про помилку.

Параметр mode відповідає за права доступу до директорії. За замовчуванням, при створенні директорії встановлюється значення 0o777, що означає, що директорію можна переглядати, записувати і виконувати для всіх користувачів системи. Якщо потрібно встановити інші права доступу, можна передати значення mode у вигляді числа.
