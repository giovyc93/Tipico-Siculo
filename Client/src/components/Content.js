import React from "react";

const Content = ({
  contentTitle,
  contentParagraph
}) => {
  return (
    <>
      <div className="containerTextContent">
        <h2 className="contentTitle">{contentTitle}</h2>
        <p className="contentParagraph">{contentParagraph}</p>
        <a href="./discover">SCOPRI DI PIù</a>
      </div>
    </>
  );
};

export default Content;
