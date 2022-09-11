export default {
  errors: {
    description: "Это поле",
    inclusion: "{{description}} is not included in the list",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} не совпадает с {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} не может быть пустым",
    blank: "{{description}} должно быть заполнено",
    present: "{{description}} must be blank",
    collection: "{{description}} must be a collection",
    singular: "{{description}} can't be a collection",
    tooLong: "{{description}} is too long (maximum is {{max}} characters)",
    tooShort: "{{description}} is too short (minimum is {{min}} characters)",
    before: "{{description}} must be before {{before}}",
    after: "{{description}} must be after {{after}}",
    wrongDateFormat: "{{description}} must be in the format of {{format}}",
    wrongLength:
      "{{description}} is the wrong length (should be {{is}} characters)",
    notANumber: "{{description}} должно быть числом",
    notAnInteger: "{{description}} должно быть целым числом",
    greaterThan: "{{description}} должно быть больше чем {{gt}}",
    greaterThanOrEqualTo:
      "{{description}} должно быть больше или равно {{gte}}",
    equalTo: "{{description}} must be equal to {{is}}",
    lessThan: "{{description}} должно быть меньше {{lt}}",
    lessThanOrEqualTo: "{{description}} должно быть меньше или равно {{lte}}",
    otherThan: "{{description}} должен отличаться от {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} must be a valid date",
    onOrAfter: "{{description}} must be on or after {{onOrAfter}}",
    onOrBefore: "{{description}} must be on or before {{onOrBefore}}",
    email: "{{description}} должно иметь корректный формат e-mail адреса",
    phone: "{{description}} must be a valid phone number",
    url: "{{description}} должно быть корректным url"
  },
  dsError: {
    wrongCredentials: "Проверьте ваши данные и попробуйте снова"
  },
  menu: {
    title: "Книжный клуб",
    main: "Рабочий стол",
    applicationSubmit: "Оставить заявку",
    schedule: "Запланировать",
    registration: "Регистрация",
    login: "Войти",
    logout: "Выйти",
    helloMessage: "Привет"
  },
  btn: {
    search: "Найти",
    find: "Поиск",
    save: "Сохранить",
    cancel: "Отмена",
    loading: "Загрузка...",
    enter: "Войти",
    register: "Зарегистрироваться",
    getBack: "Назад",
    choose: "Выбрать"
  },
  common: {
    book: "Книга",
    speaker: "Спикер",
    books: "Книги",
    speakers: "Спикеры",
    meetings: "Встречи клуба"
  },
  speakers: {
    fullname: "ФИО",
    createTitle: "Создание спикера",
    editTitle: "Редактирование спикера:",
    photo: "Фото спикера",
    name: "Имя",
    surname: "Фамилия",
    patronymic: "Отчество",
    namePlaceholder: "Введите имя",
    surnamePlaceholder: "Введите фамилию",
    patronymicPlaceholder: "Введите отчество"
  },
  books: {
    fieldSearch: "Найти по полям",
    tagSearch: "Поиск по тегам",
    createTitle: "Публикация книги",
    editTitle: "Редактирование книги:",
    name: "Название",
    author: "Автор",
    volume: "Количество страниц",
    description: "Описание",
    cover: "Обложка",
    tags: "Теги",
    rating: "Рейтинг",
    namePlaceholder: "Полное название книги",
    authorPlaceholder: "ФИО автора",
    volumePlaceholder: "Количество страниц книги",
    descriptionPlaceholder: "Ссылка на сайт с описанием книги",
    coverPlaceholder: "Выберите файл"
  },
  meetings: {
    meetingCreate: "Создание встречи",
    meetingEdit: "Редактирование встречи",
    meetingDate: "Дата встречи",
    reportsList: "Список докладов"
  },
  reports: {
    createTitle: "Создание доклада",
    editTitle: "Редактирование доклада",
    bookRating: "Оценка книги",
    presentationUrl: "URL презентации",
    videoUrl: "URL видео",
    review: "Рецензия",
    bookRatingPlaceholder: "Введите оценку",
    presentationUrlPlaceholder: "Введите URL презентации",
    videoUrlPlaceholder: "Введите URL видео",
    bookPlaceholder: "Укажите книгу",
    speakerPlaceholder: "Укажите спикера",
    reviewPlaceholder: "Введите рецензию",
    urls: "Ссылки",
    watchReport: "Посмотреть запись доклада",
    downloadPresentation: "Скачать презентацию"
  },
  login: {
    title: "Вход",
    passwordPlaceholder: "Пароль",
    remember: "Запомнить"
  },
  register: {
    title: "Регистрация",
    usernamePlaceholder: "Имя пользователя",
    passwordConfirmationPlaceholder: "Повторите пароль"
  }
};
