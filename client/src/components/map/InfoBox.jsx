import "./infobox.css";

// function numberWithCommas(x) {
//   if (x != null) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   } else {
//     return '';
//   }
// }

// TODO link is not clickable, infobox seems to be "transparent"
export function InfoBox({ data, indicator, avg, scope }) {
  let infoBox;

  if (data != null) {
    infoBox = (
      <div>
        <h2>{data.District}</h2>
        <br></br>
        <b>
          <h3>Indicator:</h3></b> {indicator.join(", ")}
        {" "} <br></br>
        
        <br></br>
        <b>Sub-indicator:</b>
        <br />
        {indicator.includes(scope[0].value) ? scope[0].description+` &\n` : null}
        {indicator.includes(scope[1].value) ? scope[1].description+` &\n` : null}
        {indicator.includes(scope[2].value) ? scope[2].description+` &\n` : null}
        {indicator.includes(scope[3].value) ? scope[3].description+` &\n` : null}
        {indicator.includes(scope[4].value) ? scope[4].description+` &\n` : null}
        {indicator.includes(scope[5].value) ? scope[5].description+` &\n` : null}
        {indicator.includes(scope[6].value) ? scope[6].description+` &\n` : null}
        {indicator.includes(scope[7].value) ? scope[7].description+` &\n` : null}
        {indicator.includes(scope[8].value) ? scope[8].description+` &\n` : null}
      </div>
    );
  } else {
    infoBox = (
      <h4>
        <i>select a district</i>
      </h4>
    );
  }

  return <div className="info leaflet-top leaflet-right">{infoBox}</div>;
}
