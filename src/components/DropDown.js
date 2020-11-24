import React from "react";
import { withTranslation } from 'react-i18next';

function DropDown(props) {
  const { t } = props;
  return (
    <div className={`dropdown ${props.space}`}>
      <button className={`btn btn-${props.class || 'secondary'} dropdown-toggle`}
        type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {t(props.label)}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.options.map((option, i) => (
          <button className="dropdown-item"
            key={i}
            type="button"
            onClick={() => props.onChange(option.value)}
          >
            {t(option.text)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default withTranslation()(DropDown);