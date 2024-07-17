import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { GetTopKeyPhrases } from "../../appRedux/actions/globalactions";
import { Bars } from "react-loader-spinner";
import CustomMapSkeleton from "../loader/Maploader";

function KeyHeatmap() {
  const dispatch = useDispatch();
  const [valuechange, setValuechange] = useState([]);
  const GetTopKeyPhrasesValue = useSelector(
    (state) => state.GetTopKeyPhrasesreducer?.Table
  );
  const GetTopKeyPhrasesloader = useSelector(
    (state) => state.GetTopKeyPhrasesloader
  );
  const uservals = useSelector((state) => state?.Userval);

  useEffect(() => {
    dispatch(GetTopKeyPhrases());
  }, [uservals]);

  useEffect(() => {
    setValuechange(
      GetTopKeyPhrasesValue?.map((data) => {
        return {
          text: data.KEYWORDS,
          value: data.COUNT,
        };
      })
    );
  }, [GetTopKeyPhrasesValue]);

  console.log("word", GetTopKeyPhrasesValue);
  const options = {
    rotations: 0,
    // rotationAngles: [-90, 0],
  };

  return (
    <div>
      {!GetTopKeyPhrasesloader && GetTopKeyPhrasesValue?.length > 0 ? (
        <>
          <ReactWordcloud words={valuechange} options={options} />
        </>
      ) : (
        <>
          <CustomMapSkeleton width={650} height={280} />
        </>
      )}
    </div>
  );
}
export default KeyHeatmap;
