import React from "react";

function Modal(props) {
  return (
    <div className="modal fade" id={props.id} data-testid={props.id} tabIndex="-1" role="dialog" aria-labelledby={`${props.id}Title`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    {props.body}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;