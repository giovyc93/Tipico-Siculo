import React from "react";

const Content = ({
  contentParagraph
}) => {
  return (
    <>
      <div className="containerTextContent">
        <p className="contentParagraph">{contentParagraph}</p>
      </div>
    </>
  );
};

export default Content;
