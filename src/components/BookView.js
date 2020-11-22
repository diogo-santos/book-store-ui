import React from "react";
import moment from 'moment';
import noCoverThumb from "../images/no_cover_thumb.gif";

import { withTranslation } from 'react-i18next';

function BookView(props) {
  const { t } = props;
  return (
    <div className="d-flex flex-row">
      <div className="p-2">
        <img src={props.book.image || noCoverThumb} width="128" alt="Front cover" />
      </div>
      <div className="p-2">
        <h6>{props.book.title}</h6>
        <div>{t('book_title')} <span className="text-muted">{props.book.author}</span></div>
        <div>{t('book_category')} <span className="text-muted">{props.book.category === 'Unknown' ? t('Unknown'): props.book.category}</span></div>
        <div>{t('book_published_on')}
          <span className="text-muted ml-1">
            {props.book.publishedDate && props.book.publishedDate.length === 10
              ? moment(props.book.publishedDate, "YYYY-MM-DD").format('YYYY')
              : props.book.publishedDate
            }
          </span>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default withTranslation()(BookView);