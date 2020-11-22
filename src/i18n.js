import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: {
      app_name: "Book Store App",
      app_menu_web: "Web",
      app_menu_store: "Store",
      app_menu_translate: "Translate",
      book_title: "Title",
      book_author: "Author",
      book_category: "Category",
      book_published_on: "Published on",
      book_search_input: "Search a book in the web",
      book_search: "Search",
      book_search_error: "It was not possible to fetch books. Please, try again later",
      book_save: "Save",
      book_save_sucess: "Book saved!",
      book_save_error: "It was not possible to save this book. Please, try again later",
      book_view: "View",
      book_delete: "Delete",
      book_delete_confirmation: "Are you sure you wish to delete {{book}}",
      book_delete_error: "It was not possible to delete this book. Please, try again later",
      "Sort By": "Sort By",
      "Page size": "Page size",
      "5 per page": "5 per page",
      "10 per page": "10 per page",
      "50 per page": "50 per page",
      "Unknown": "Unknown"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;