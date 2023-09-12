import React from "react";

const Content = ({
  contentImage1,
  contentTitle1,
  contentParagraph1,
  classContainerDiff,
}) => {
  return (
    <>
      <div className={classContainerDiff}>
        <div className="containerImgContent">
          <img className="imageInside" src={contentImage1} alt="" />
        </div>
        <div className="containerTextContent">
          <h1 className="contentTitle">{contentTitle1}</h1>
          <p className="contentParagraph">{contentParagraph1}</p>
          <a href="./">SCOPRI DI PIù</a>
        </div>
      </div>
    </>
  );
};

export default Content;
