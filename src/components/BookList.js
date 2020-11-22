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
            {props.onSave && (
              <button
                type="button"
                data-testid="store-book"
                className="btn btn-primary btn-sm mr-2"
                onClick={() => props.onSave(book, i)}
              >
                {t('book_save')}
              </button>
            )}
            {props.onSave && props.storedBooks.includes(i) && (
              <span className="text-success">{t('book_save_sucess')}</span>
            )}
          </div>
        </BookView>
      ))}
    </div>
  );
}

export default withTranslation()(BookList);