import React from "react";
import { withTranslation } from 'react-i18next';

function Alert(props) {
  const { t } = props;
  return (
    props.message && (
      <div className={`alert alert-${props.type} alert-dismissible fade show mb-2`} role="alert">
        {t(props.message)}
        <button type="button" className="close" onClick={() => props.onClose()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
}

export default withTranslation()(Alert);