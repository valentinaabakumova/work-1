import React from 'react';

function Description() {
  return (
    <div className="wrap">
      <div className="wrap-action">
        <div className="text">
          <div className="text-number">1</div>
          <h3 className="text-name">Import</h3>
        </div>
        <p className="description">
          Add products to the library using the Import CSV function in the top
          right corner.
        </p>
      </div>

      <div className="wrap-action">
        <div className="text">
          <div className="text-number">2</div>
          <h3 className="text-name">Search</h3>
        </div>
        <p className="description">
          Each product variant is identified by four attributes you can use to
          filter the variant list in the left sidebar.
        </p>
      </div>
      <div className="wrap-action">
        <div className="text">
          <div className="text-number">3</div>
          <h3 className="text-name">Manage</h3>
        </div>
        <p className="description">
          Selecting a product variant in the sidebar shows managment options for
          the variant.
        </p>
      </div>
    </div>
  );
}

export default Description;
