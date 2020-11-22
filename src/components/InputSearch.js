import React from "react";
import { withTranslation } from 'react-i18next';

function InputSearch(props) {
  const { t } = props;
  return (
    <div className="d-flex justify-content-left mb-2">
      <input
        type="text"
        className="form-control col-9 col-sm-6 col-md-5 col-lg-4 mr-2"
        placeholder={t(props.placeholder)}
        aria-describedby="basic-addon2"
        onChange={props.onInputChange}
        onKeyDown={props.onInputKeyDown}
      />
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={props.onSearch}
        >
          {t('book_search')}
        </button>
      </div>
    </div>
  );
}

export default withTranslation()(InputSearch);