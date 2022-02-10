import { useState, useEffect } from "react";



export function MetaDiagnostic() {

  const [metas, setMetas] = useState([]);

  useEffect(() => {

    const head = document.querySelector("head");
    let metaTags = document.querySelectorAll("head meta")
    metaTags = Array.from(metaTags);

    const onHeadChange = () => {

      let metaTags = document.querySelectorAll("head meta")
      metaTags = Array.from(metaTags);

      setMetas(metaTags);
    }

    const observer = new MutationObserver(onHeadChange);

    // Note: subtree true and childList true to ensure changes 
    observer.observe(head, { attributes: true, subtree : true, childList: true});
    
    setMetas(metaTags);

    return () => {
      observer.disconnect();
    }
  }, []);

  function convertTagToElements(elem, index) {
    const metaTagInfo = elem.getAttributeNames().map((attrName, index) => {
      return <p key={index} className="meta-attr-info">
        <span className="attr-name">
          {attrName}:
        </span>
        <span className="attr-value">
          {elem.getAttribute(attrName)}
        </span>
      </p>;
    });

    return (
      <div key={index} className="meta-result">
        <p className="meta-label">{index + 1}. &lt;meta&gt;</p>
        {metaTagInfo}
      </div>
    );
  }

  console.log(metas);

  return <div className="meta-diagnostic">
    <h2>Meta Information</h2>
    <div>
      {metas.map(convertTagToElements)}
    </div>
  </div>;
}
