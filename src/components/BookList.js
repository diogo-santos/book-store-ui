import React from 'react';
import BookView from '../components/BookView';

import { withTranslation } from 'react-i18next';

function BookList(props) {
  const { t } = props;
  return (
    <div className="mb-2">
      {props.books.map((book, i) => (
        <BookView book={book} key={i}>
          <div className="d-flex flex-row mt-2">
            {props.onView && (
              <button
                type="button"
                data-testid="view-book"
                className="btn btn-primary btn-sm mr-2"
                data-toggle="modal" data-target={`#${props.viewBookModalId}`}
                onClick={() => props.onView(book.id)}
              >
                {t('book_view')}
              </button>
            )}
            {props.onDelete && (
              <button
                type="button"
                data-testid="delete-book"
                className="btn btn-danger btn-sm mr-2"
                onClick={() =>
                  window.confirm(t('book_delete_confirmation', { book: book.title }))
                  && props.onDelete(book.id)
                }
              >
                {t('book_delete')}
              </button>
            )}
            {props.onSave && (
              <button
                type="button"
                data-testid="store-book"
                className="btn btn-primary btn-sm mr-2"
                onClick={() => props.onSave(book)}
              >
                {t('book_save')}
              </button>
            )}
          </div>
        </BookView>
      ))}
    </div>
  );
}

export default withTranslation()(BookList);