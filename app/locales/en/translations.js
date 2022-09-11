export default {
  errors: {
    description: "This field",
    inclusion: "{{description}} is not included in the list",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} doesn't match {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} can't be empty",
    blank: "{{description}} can't be blank",
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
    notANumber: "{{description}} must be a number",
    notAnInteger: "{{description}} must be an integer",
    greaterThan: "{{description}} must be greater than {{gt}}",
    greaterThanOrEqualTo:
      "{{description}} must be greater than or equal to {{gte}}",
    equalTo: "{{description}} must be equal to {{is}}",
    lessThan: "{{description}} must be less than {{lt}}",
    lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
    otherThan: "{{description}} must be other than {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} must be a valid date",
    onOrAfter: "{{description}} must be on or after {{onOrAfter}}",
    onOrBefore: "{{description}} must be on or before {{onOrBefore}}",
    email: "{{description}} must be a valid email address",
    phone: "{{description}} must be a valid phone number",
    url: "{{description}} must be a valid url",
    passwordDescription: "Password and password confirmation",
    passwordDontMatch: "do not match"
  },
  dsError: {
    wrongCredentials: "Check your credentials and try again",
    usernameTaken: "Username is already taken",
    emailTaken: "Email is already taken"
  },
  menu: {
    title: "Books club",
    main: "Desktop",
    applicationSubmit: "Submit application",
    schedule: "Schedule",
    registration: "Registration",
    login: "Login",
    logout: "Logout",
    helloMessage: "Hello"
  },
  btn: {
    search: "Search",
    find: "Find",
    save: "Save",
    cancel: "Cancel",
    loading: "Loading...",
    enter: "Enter",
    register: "Register",
    getBack: "Back",
    choose: "Choose"
  },
  common: {
    book: "Book",
    speaker: "Speaker",
    books: "Books",
    speakers: "Speakers",
    meetings: "Meetings"
  },
  speakers: {
    fullname: "Fullname",
    createTitle: "Speaker creation",
    editTitle: "Speaker editing:",
    photo: "Speaker photo",
    name: "Name",
    surname: "Surname",
    patronymic: "Patronymic",
    namePlaceholder: "Enter a name",
    surnamePlaceholder: "Enter a surname",
    patronymicPlaceholder: "Enter a patronymic"
  },
  books: {
    fieldSearch: "Search by fields",
    tagSearch: "Find by tags",
    createTitle: "Book publication",
    editTitle: "Book editing:",
    name: "Name",
    author: "Author",
    volume: "Pages count",
    description: "Description",
    cover: "Cover",
    tags: "Tags",
    rating: "Rating",
    namePlaceholder: "Full book name",
    authorPlaceholder: "Author's fullname",
    volumePlaceholder: "Book's pages count",
    descriptionPlaceholder: "URL to book's description",
    coverPlaceholder: "Choose file"
  },
  meetings: {
    meetingCreate: "Meeting creation",
    meetingEdit: "Meeting editing",
    meetingDate: "Meeting date",
    reportsList: "List of reports"
  },
  reports: {
    createTitle: "Report creation",
    editTitle: "Report editing",
    bookRating: "Book rating",
    presentationUrl: "Presentation URL",
    videoUrl: "Video URL",
    review: "Review",
    bookRatingPlaceholder: "Enter rating",
    presentationUrlPlaceholder: "Enter presentation URL",
    videoUrlPlaceholder: "Enter video URL",
    bookPlaceholder: "Choose book",
    speakerPlaceholder: "Choose speaker",
    reviewPlaceholder: "Enter review",
    urls: "URLs",
    watchReport: "Watch report video",
    downloadPresentation: "Download video"
  },
  login: {
    title: "Login",
    passwordPlaceholder: "Password",
    remember: "Remember"
  },
  register: {
    title: "Registration",
    usernamePlaceholder: "Username",
    passwordConfirmationPlaceholder: "Confirm password"
  }
};
