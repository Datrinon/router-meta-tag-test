export function MetaDiagnostic() {
  return <div className="meta-diagnostic">
    <h2>Meta Information</h2>
    <div>
      {Array.from(document.querySelectorAll("head meta")).map((elem, index) => {
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
      })}
    </div>
  </div>;
}
