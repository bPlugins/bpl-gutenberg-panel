import { RangeControl } from "@wordpress/components";
import React, { Fragment, useEffect, useRef, useState } from "react";

export const RangeUnitControl = (props) => {
  const {
    label,
    units,
    className,
    style,
    value,
    min = 0,
    max = 100,
    onChange = () => { },
    ...rest
  } = props;
  const unitRef = useRef();
  const [toggle, setToggle] = useState(false);
  const defaults = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
    { label: "rem", value: "rem" },
    { label: "vw", value: "vw" },
    { label: "vh", value: "vh" },
  ];
  const defaultUnits = defaults || units;

  // const number = parseInt(unit);
  const number = parseInt(value?.replace(/[^0-9]/g, ''));
  // const unit = value.slice(number.toString().length);
  const unit = value?.replace(/\d+/g, '') || "px"

  const [currentNumber, setCurrentNumber] = useState(number);
  const [currentUnit, setCurrentUnit] = useState(unit);

  const rangeRef = useRef();

  const id = Math.floor(Math.random() * 999999);

  useEffect(() => {
    number >= 0 ? onChange(`${currentNumber}${currentUnit}`) : onChange("");
  }, [currentNumber, currentUnit]);

  useEffect(() => {
    const handle = (e) => {
      if (!unitRef?.current?.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  const unitHeight = rangeRef.current?.childNodes[0]?.clientHeight


  return (
    <Fragment>
      <style>{`
        .labelWrapper {
            display: flex;
            justify-content: space-between;
          }
          .rangeControlWrapper {
            display: flex;
          }
          .rangeControlWrapper  .components-range-control__wrapper .components-range-control__thumb-wrapper>span{
            background-color:#4527a4
          }
          .rangeControlWrapper  .components-range-control__wrapper .components-range-control__track{
            color:#4527a4
          }
          .unitControlBtn {
            font-size: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            border: 1px solid rgb(168, 168, 168);
            border-left: none;
            cursor: pointer;
            font-weight: 600;
            background-color: #0000;
            height: ${unitHeight}px;
            width: 21px;
            border-radius: 0 2px 2px 0;
            text-transform: uppercase;
            margin-left: -1px;
          }

          .unitControlBtn:focus {
            border-color: #4527a4;
            border-left: 1px solid #4527a4;
          }
          .unitControlWrapper {
            position: relative;
          }
          .unitListWrapper {
            position: absolute;
            left: 0px;
            z-index: 9999 !important;
            background: #fff;
            font-weight: 600;
            border: 1px solid rgb(168, 168, 168);
            text-align: center;
            border-radius: 0 0 2px 2px;
          }
          .unitList {
            margin: 0;
            cursor: default;
            font-size: 9px;
          }
          .unitList:hover {
            background-color: #4527a4;
            color: aliceblue;
          }
          .hoverBgColor {
            background-color: #4527a4;
            color: aliceblue;
          }


      `}</style>
      <div
        id={`unitId-${id}`}
        className={`unitRangeWrapper ${className}`}
        style={style}
      >
        <div className="labelWrapper">
          <label htmlFor="">{label}</label>
        </div>
        <div className="rangeControlWrapper">
          <div ref={rangeRef} style={{ width: "100%" }}>
            <RangeControl
              value={currentNumber}
              onChange={(val) => {
                setCurrentNumber(val)
              }}
              {...rest}
              min={min}
              max={max}
            />
          </div>
          <div ref={unitRef} className="unitControlWrapper">
            <button
              onClick={() => setToggle(!toggle)}
              className="unitControlBtn"
            >
              {unit}
            </button>
            {toggle && (
              <div className="unitListWrapper">
                {defaultUnits?.map((val, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setCurrentUnit(val.value);
                      setToggle(false);
                    }}
                    className={`unitList ${val.value === currentUnit ? "hoverBgColor" : ""
                      } `}
                  >
                    {val.label}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

