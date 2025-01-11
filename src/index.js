import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

// function Test() {
//   const [starRating, setStarRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={5} onSetStarRating={setStarRating} />
//       <p>This movies was rated {starRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={10}
      message={[
        "terrible",
        "Not too Bad",
        "Not Bad",
        "Bad",
        "Good",
        "Nice",
        "Amazing",
        "Super Amazing",
        "Super",
        "Super+",
      ]}
    />
    <StarRating size={30} color="pink" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
