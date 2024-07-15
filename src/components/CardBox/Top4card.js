import React from "react";

const Top4card = ({
  Totalcalls,
  Totalduration,
  AvghandlingDuration,
  FCRpercentage,
  FCRavgtimeper,
}) => {
  return (
    <div>
      <h4>
        {Totalcalls}
        {FCRpercentage && `(${FCRpercentage})`}
      </h4>
      <h4>
        {Totalduration}
        {FCRavgtimeper && `(${FCRavgtimeper})`}
      </h4>
      <h4>
        <span>Avg Handling Duration :</span>
        {AvghandlingDuration}
      </h4>
    </div>
  );
};

export default Top4card;
