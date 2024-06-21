import React from "react";
import { levelClass } from "../const";
export const GPassIcon = (prop) => {
  if (prop.mode == "gpass") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = levelClass(prop.level - 1) + " icn";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    if (prop.iconamin) {
      _class = _class + " " + prop.iconamin;
    }

    var _class2 = "";
    if (prop.amin) {
      _class2 = prop.amin;
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          className={_class2 + " gpassicon icn"}
          viewBox="0 0 24 24"
          style={{
            width: prop.width,
            height: "auto",
          }}
        >
          <g>
            <path
              className={_class}
              d="M12.03 0C6.94 0 2.57 3.17.82 7.65l1.91.77a10 10 0 0 1 9.3-6.4c2.24 0 4.32.77 5.96 1.97l1.2-1.64A11.96 11.96 0 0 0 12.03 0zm0 2.3a9.76 9.76 0 0 0-9.08 6.23l1.91.7a7.62 7.62 0 0 1 7.17-4.91zm3.55.7l-.76 1.92a7.47 7.47 0 0 1 4.75 5.63h2.08a9.7 9.7 0 0 0-6.07-7.54zm-3.55 1.6a7.44 7.44 0 1 0 7.32 8.9h-2.08a5.5 5.5 0 0 1-5.24 3.94 5.39 5.39 0 0 1-5.42-5.41 5.39 5.39 0 0 1 5.42-5.41 5.4 5.4 0 0 1 5.2 3.93h2.07a7.35 7.35 0 0 0-7.27-5.96zm10.22 1.09L20.5 6.78a9.5 9.5 0 0 1 1.42 3.77H24a11.56 11.56 0 0 0-1.75-4.86zM11.97 6.83a5.22 5.22 0 0 0-4.7 7.27l1.97-.87a2.97 2.97 0 0 1-.27-1.2c0-1.64 1.36-3.01 3-3.01zm1.92.39l-.77 2.02c.66.27 1.15.7 1.53 1.31h2.3a5.04 5.04 0 0 0-3.06-3.33zM0 12.02c0 1.65.33 3.29 1.04 4.87l1.8-.82a10.49 10.49 0 0 1-.82-4.04zm2.3 0c0 4.1 2.51 7.6 6.12 9.03l.76-1.92a7.63 7.63 0 0 1-4.86-7.1zm12.3 1.48c-.33.6-.82 1.1-1.48 1.31l.77 2.03a5.04 5.04 0 0 0 3.06-3.34zm4.97 0a7.73 7.73 0 0 1-7.54 6.24v2.02a9.71 9.71 0 0 0 9.62-8.26zm2.35 0a10.1 10.1 0 0 1-9.9 8.53c-2.73 0-5.24-1.15-7.04-2.95L3.55 20.5c2.19 2.19 5.2 3.5 8.53 3.5A12 12 0 0 0 24 13.5zm-12.02.66l-1.53 1.53a5.21 5.21 0 0 0 3.66 1.53v-2.19a3.02 3.02 0 0 1-2.13-.87z"
            />
            <text x="15" y="13" className="gpassicontext">
              GPass
            </text>{" "}
          </g>
        </svg>

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
};
const LevelIcon = (prop) => {
  if (prop.mode == "gpass") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = levelClass(prop.level - 1) + " icn";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    if (prop.iconamin) {
      _class = _class + " " + prop.iconamin;
    }

    var _class2 = "";
    if (prop.amin) {
      _class2 = prop.amin;
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          className={_class2 + " gpassicon icn"}
          viewBox="0 0 24 24"
          style={{
            width: prop.width,
            height: "auto",
          }}
        >
          <g>
            <path
              className={_class}
              d="M12.03 0C6.94 0 2.57 3.17.82 7.65l1.91.77a10 10 0 0 1 9.3-6.4c2.24 0 4.32.77 5.96 1.97l1.2-1.64A11.96 11.96 0 0 0 12.03 0zm0 2.3a9.76 9.76 0 0 0-9.08 6.23l1.91.7a7.62 7.62 0 0 1 7.17-4.91zm3.55.7l-.76 1.92a7.47 7.47 0 0 1 4.75 5.63h2.08a9.7 9.7 0 0 0-6.07-7.54zm-3.55 1.6a7.44 7.44 0 1 0 7.32 8.9h-2.08a5.5 5.5 0 0 1-5.24 3.94 5.39 5.39 0 0 1-5.42-5.41 5.39 5.39 0 0 1 5.42-5.41 5.4 5.4 0 0 1 5.2 3.93h2.07a7.35 7.35 0 0 0-7.27-5.96zm10.22 1.09L20.5 6.78a9.5 9.5 0 0 1 1.42 3.77H24a11.56 11.56 0 0 0-1.75-4.86zM11.97 6.83a5.22 5.22 0 0 0-4.7 7.27l1.97-.87a2.97 2.97 0 0 1-.27-1.2c0-1.64 1.36-3.01 3-3.01zm1.92.39l-.77 2.02c.66.27 1.15.7 1.53 1.31h2.3a5.04 5.04 0 0 0-3.06-3.33zM0 12.02c0 1.65.33 3.29 1.04 4.87l1.8-.82a10.49 10.49 0 0 1-.82-4.04zm2.3 0c0 4.1 2.51 7.6 6.12 9.03l.76-1.92a7.63 7.63 0 0 1-4.86-7.1zm12.3 1.48c-.33.6-.82 1.1-1.48 1.31l.77 2.03a5.04 5.04 0 0 0 3.06-3.34zm4.97 0a7.73 7.73 0 0 1-7.54 6.24v2.02a9.71 9.71 0 0 0 9.62-8.26zm2.35 0a10.1 10.1 0 0 1-9.9 8.53c-2.73 0-5.24-1.15-7.04-2.95L3.55 20.5c2.19 2.19 5.2 3.5 8.53 3.5A12 12 0 0 0 24 13.5zm-12.02.66l-1.53 1.53a5.21 5.21 0 0 0 3.66 1.53v-2.19a3.02 3.02 0 0 1-2.13-.87z"
            />
            <text x="15" y="13" className="gpassicontext">
              GPass
            </text>{" "}
          </g>
        </svg>

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }

  if (prop.mode == "vip") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "vipicon";
    if (prop.text == "big") {
      _class = _class + " big icn";
    }

    return (
      <span onClick={prop.onClick} className="iconarea">
        <img
          src={"/assets/images/svg/vip/icon.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }

  if (prop.mode == "tournament") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "vipicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }

    if (prop.amin) {
      _class = _class + " " + prop.amin;
    }
    var _class2 = "";
    if (prop.iconamin) {
      _class2 = _class2 + " " + prop.iconamin.replace("charkhesh", "");
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <img
          src={"/assets/images/svg/tournament/icon.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "kingof") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "vipicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }

    if (prop.amin) {
      _class = _class + " " + prop.amin;
    }
    var _class2 = "";
    if (prop.iconamin) {
      _class2 = _class2 + " " + prop.iconamin.replace("charkhesh", "");
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <img
          src={"/assets/images/svg/kingof/icon.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "bonus") {
    return (
      <span className="iconarea">
        <img
          src={"/assets/bonus.svg"}
          className="icn"
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "commission") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "rakebackicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }

    if (prop.amin) {
      _class = _class + " " + prop.amin;
    }
    var _class2 = _class;
    if (prop.iconamin) {
      _class2 = _class2 + " " + prop.iconamin.replace("charkhesh", "");
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <span
          className={_class}
          style={{
            width: prop.width,
            height: "auto",
          }}
        >
          <img
            src={"/assets/commission.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              width: prop.width,
              height: "auto",
            }}
          />
        </span>
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "rakeback") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "rakebackicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }

    if (prop.amin) {
      _class = _class + " " + prop.amin;
    }
    var _class2 = _class;
    if (prop.iconamin) {
      _class2 = _class2 + " " + prop.iconamin.replace("charkhesh", "");
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className={_class}
          viewBox="0 0 512 512"
          style={{
            width: prop.width,
            height: "auto",
            filter: "hue-rotate(150deg)",
          }}
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M457.525,177.11c-3.323-5.127-6.884-10.269-10.643-15.419c-0.44-2.366-1.949-4.261-3.937-5.289   c-17.81-23.502-40.071-47.165-66.473-70.595C318.544,34.4,259.761,1.283,259.174,0.955c-0.008-0.004-0.016-0.007-0.024-0.011   c-0.262-0.146-0.534-0.275-0.814-0.389c-0.047-0.019-0.095-0.034-0.143-0.052c-0.225-0.087-0.456-0.162-0.691-0.227   c-0.078-0.021-0.156-0.041-0.234-0.06c-0.213-0.051-0.43-0.092-0.65-0.125c-0.077-0.011-0.154-0.026-0.231-0.035   C256.102,0.021,255.814,0,255.521,0c-0.006,0-0.013,0-0.019,0c-0.293,0-0.581,0.021-0.865,0.055   c-0.078,0.009-0.154,0.024-0.231,0.035c-0.22,0.033-0.437,0.074-0.65,0.125c-0.078,0.019-0.156,0.039-0.234,0.06   c-0.235,0.065-0.466,0.14-0.691,0.227c-0.047,0.018-0.095,0.033-0.143,0.052c-0.28,0.114-0.552,0.243-0.814,0.389   c-0.008,0.004-0.016,0.007-0.024,0.011c-0.587,0.328-59.37,33.445-117.297,84.853c-34.176,30.329-61.446,61.047-81.053,91.302   c-24.851,38.345-37.451,76.121-37.451,112.28C16.048,363.063,76.477,423,150.754,423c23.014,0,45.045-5.631,64.761-16.437   c-12.671,33.944-32.166,65.359-57.089,91.792c-2.054,2.178-2.616,5.368-1.43,8.117s3.893,4.528,6.886,4.528h56.78   c0.007,0,0.014,0.001,0.021,0.001c0.008,0,0.016-0.001,0.024-0.001h69.26c0.129,0.007,0.258,0.024,0.387,0.024   c0.115,0,0.23-0.019,0.345-0.024h57.781c2.994,0,5.7-1.78,6.886-4.528s0.624-5.939-1.43-8.117   c-24.701-26.197-44.088-57.324-56.768-90.942C316.495,417.66,337.959,423,360.27,423c74.277,0,134.706-59.937,134.706-133.609   C494.976,253.231,482.375,215.455,457.525,177.11z M465.496,282.936c-2.707-3.278-7.122-4.927-11.527-3.881   c-9.739-3.512-19.278-7.55-28.573-12.086c15.435-7.197,32.524-11.42,50.53-11.916c2.505,10.823,3.849,21.497,4.023,31.993   C475.092,285.804,470.274,284.431,465.496,282.936z M386.211,224.459c-3.55-5.27-10.7-6.65-15.97-3.1   c-2.417,1.636-4.003,4.03-4.68,6.649c-6.146-5.178-12.084-10.615-17.792-16.299c25.762-19.762,55.76-33.609,87.69-40.219   c3.336,4.604,6.511,9.198,9.478,13.777c1.273,1.964,2.505,3.925,3.709,5.883c-1.336-0.25-2.737-0.278-4.154-0.021   c-6.25,1.13-10.4,7.11-9.27,13.36c1,5.56,5.85,9.46,11.3,9.46c0.68,0,1.37-0.06,2.06-0.19c4.174-0.755,7.4-3.677,8.754-7.393   c6.01,11.398,10.831,22.689,14.454,33.842c-22.635,1.206-43.891,7.686-62.567,18.224c-9.33-5.306-18.375-11.12-27.072-17.431   c0.329-0.178,0.655-0.368,0.971-0.583C388.381,236.869,389.771,229.719,386.211,224.459z M85.548,158.346   c3.842-4.824,7.896-9.657,12.128-14.495c31.775,8.706,61.053,23.448,87.13,43.872c-3.591,4.483-7.315,8.847-11.158,13.094   C147.695,180.63,117.606,166.023,85.548,158.346z M196.573,197.028c21.082-26.335,37.503-55.726,48.809-87.354   c0.916-2.563,1.784-5.141,2.63-7.724v74.96c-13.759,3.374-24,15.806-24,30.591c0,17.369,14.131,31.5,31.5,31.5   s31.5-14.131,31.5-31.5c0-14.785-10.241-27.216-24-30.591v-74.96c0.845,2.583,1.714,5.16,2.63,7.724   c11.306,31.629,27.727,61.019,48.809,87.354c3.663,4.576,7.463,9.03,11.375,13.373c-8.282,7.35-16.074,15.306-23.28,23.842   c-22.403,26.536-38.381,57.682-47.038,90.907c-8.327-31.936-23.418-61.986-44.44-87.785c-7.909-9.706-16.578-18.71-25.877-26.956   C189.105,206.063,192.907,201.606,196.573,197.028z M255.512,191c9.098,0,16.5,7.402,16.5,16.5s-7.402,16.5-16.5,16.5   s-16.5-7.402-16.5-16.5S246.414,191,255.512,191z M326.319,187.847c26.059-20.443,55.319-35.208,87.078-43.939   c4.217,4.822,8.256,9.64,12.086,14.449c-32.081,7.69-62.149,22.242-88.117,42.45C333.563,196.602,329.876,192.283,326.319,187.847z    M402.179,131.545c-30.829,9.425-59.335,24.312-84.93,44.355c-15.799-21.926-28.39-45.836-37.483-71.276   c-9.628-26.937-15.138-55.057-16.443-83.768c19.623,12.011,61.568,39.231,103.193,76.17   C379.455,108.51,391.347,120.032,402.179,131.545z M144.306,97.207c41.648-36.992,83.728-64.305,103.395-76.347   c-1.306,28.709-6.815,56.828-16.443,83.764c-9.075,25.389-21.634,49.255-37.389,71.145c-25.609-20.022-54.128-34.886-84.968-44.286   C119.66,120.051,131.467,108.61,144.306,97.207z M75.559,171.499c0.785,0.162,1.572,0.313,2.35,0.483   c31.03,6.774,60.213,20.479,85.333,39.741c-5.968,5.941-12.185,11.613-18.63,17c-0.398-3.212-2.134-6.24-5.04-8.173   c-5.29-3.51-12.43-2.07-15.95,3.22c-3.51,5.29-2.07,12.42,3.22,15.94c0.713,0.473,1.46,0.853,2.225,1.149   c-8.757,6.366-17.866,12.229-27.266,17.575c-18.677-10.538-39.932-17.018-62.567-18.224c3.488-10.736,8.086-21.6,13.785-32.564   c1.617,3.001,4.541,5.264,8.163,5.894c0.66,0.11,1.32,0.17,1.97,0.17c5.49,0,10.35-3.94,11.32-9.54   c1.08-6.26-3.11-12.21-9.37-13.29c-0.829-0.144-1.651-0.19-2.459-0.156c1.097-1.778,2.215-3.557,3.368-5.34   C68.999,180.769,72.197,176.139,75.559,171.499z M57.053,279.054c-4.404-1.039-8.818,0.606-11.525,3.881   c-4.778,1.496-9.597,2.869-14.455,4.11c0.175-10.497,1.518-21.171,4.023-31.993c18.006,0.496,35.095,4.719,50.53,11.916   C76.331,271.504,66.793,275.542,57.053,279.054z M135.976,407.096c-0.172-4.963-3.571-9.43-8.624-10.736   c-5.341-1.372-10.769,1.242-13.14,5.981C70.015,388.27,36.941,349.394,31.763,302.33c4.878-1.192,9.721-2.507,14.525-3.942   c1.436,1.433,3.26,2.514,5.374,3.031c0.92,0.22,1.84,0.33,2.74,0.33c5.18,0,9.88-3.52,11.17-8.77   c0.093-0.382,0.165-0.763,0.218-1.144c12.222-4.587,24.13-9.974,35.651-16.09c35.229,22.941,58.572,62.67,58.572,107.754   c0,8.168-0.78,16.325-2.3,24.281c-2.308,0.13-4.625,0.219-6.958,0.219C145.751,408,140.819,407.689,135.976,407.096z    M236.565,390.544c0.893-3.123-0.327-6.466-3.021-8.281c-2.693-1.814-6.25-1.689-8.809,0.311c-0.52,0.406-1.054,0.786-1.578,1.183   c-1.926-1.801-4.473-2.958-7.315-3.088c-6.34-0.29-11.72,4.61-12.02,10.96c-0.061,1.341,0.122,2.634,0.489,3.85   c-9.815,4.902-20.229,8.389-31.042,10.418c1.156-7.381,1.743-14.887,1.743-22.397c0-47.592-23.295-89.839-59.074-115.96   c21.397-12.901,41.232-28.433,58.939-46.233c8.833,7.799,17.062,16.33,24.562,25.534c31.323,38.441,48.573,86.974,48.573,136.659   c0,39.867-10.876,78.672-31.489,112.5h-35.951C206.329,465.211,225.556,429.069,236.565,390.544z M255.512,442.073   c4.895,18.771,12.145,36.883,21.636,53.926h-43.273C243.366,478.956,250.617,460.844,255.512,442.073z M331.793,496h-37.292   c-20.613-33.828-31.489-72.632-31.489-112.5c0-51.058,18.11-100.628,50.996-139.58c6.845-8.108,14.252-15.658,22.132-22.62   c17.709,17.803,37.546,33.338,58.946,46.24c-35.779,26.121-59.074,68.368-59.074,115.96c0,7.51,0.594,15.007,1.75,22.388   c-10.67-2.012-20.963-5.461-30.683-10.28c0.16-0.873,0.233-1.773,0.184-2.698c-0.34-6.34-5.76-11.21-12.1-10.87   c-2.41,0.129-4.604,0.995-6.384,2.364c-0.291-0.216-0.59-0.418-0.88-0.637c-2.579-1.948-6.115-2.024-8.776-0.19   c-2.661,1.834-3.847,5.167-2.945,8.27C287.239,429.874,306.336,465.566,331.793,496z M396.812,402.341   c-2.371-4.74-7.799-7.354-13.141-5.981c-5.053,1.306-8.445,5.773-8.62,10.736c-4.845,0.594-9.777,0.904-14.781,0.904   c-2.334,0-4.654-0.089-6.965-0.22c-1.52-7.961-2.292-16.111-2.292-24.28c0-45.084,23.342-84.813,58.572-107.754   c11.524,6.118,23.434,11.506,35.659,16.094c0.054,0.38,0.126,0.76,0.219,1.141c1.28,5.25,5.98,8.77,11.15,8.77   c0.91,0,1.83-0.11,2.75-0.34c2.113-0.514,3.935-1.592,5.37-3.023c4.805,1.436,9.649,2.751,14.529,3.943   C474.083,349.394,441.008,388.27,396.812,402.341z" />
            <path d="M95.401,297.039c-5.11-3.78-12.31-2.7-16.08,2.4c-3.78,5.11-2.71,12.31,2.4,16.09c2.06,1.52,4.45,2.25,6.83,2.25   c3.52,0,7-1.61,9.25-4.66C101.582,308.02,100.501,300.819,95.401,297.039z" />
            <path d="M123.792,328.329c-3.27-5.45-10.33-7.22-15.78-3.96c-5.45,3.27-7.22,10.33-3.95,15.78c2.15,3.59,5.97,5.59,9.87,5.59   c2.02,0,4.05-0.53,5.9-1.64C125.282,340.839,127.052,333.78,123.792,328.329z" />
            <path d="M124.921,358.419c-6.29,0.9-10.66,6.73-9.76,13.01c0.82,5.74,5.73,9.88,11.36,9.88c0.55,0,1.09-0.04,1.65-0.12   c6.28-0.9,10.65-6.72,9.76-13.01C137.032,361.889,131.202,357.52,124.921,358.419z" />
            <path d="M415.622,297.039c-5.11,3.78-6.18,10.98-2.4,16.08c2.25,3.05,5.73,4.66,9.25,4.66c2.38,0,4.77-0.73,6.83-2.25   c5.11-3.78,6.18-10.98,2.41-16.09C427.932,294.339,420.722,293.26,415.622,297.039z" />
            <path d="M403.012,324.369c-5.45-3.26-12.52-1.49-15.78,3.96c-3.26,5.45-1.49,12.51,3.96,15.77c1.85,1.11,3.88,1.64,5.9,1.64   c3.91,0,7.72-1.99,9.87-5.59C410.222,334.699,408.452,327.639,403.012,324.369z" />
            <path d="M386.102,358.419c-6.28-0.9-12.11,3.47-13.01,9.76c-0.89,6.29,3.48,12.11,9.76,13.01c0.55,0.08,1.1,0.12,1.64,0.12   c5.63,0,10.55-4.14,11.37-9.88C396.762,365.149,392.392,359.319,386.102,358.419z" />
            <path d="M211.392,342.939c-6.27,1-10.54,6.89-9.54,13.16c0.9,5.66,5.79,9.69,11.34,9.69c0.6,0,1.21-0.04,1.83-0.14   c6.27-1,10.54-6.9,9.54-13.17S217.671,341.939,211.392,342.939z" />
            <path d="M95.372,223.199c1.4,0.56,2.84,0.82,4.26,0.82c4.57,0,8.89-2.74,10.68-7.24c2.36-5.9-0.52-12.59-6.42-14.94   c-5.9-2.35-12.59,0.52-14.94,6.42C86.602,214.159,89.472,220.849,95.372,223.199z" />
            <path d="M207.492,328.389c5.94-2.27,8.9-8.92,6.63-14.85h-0.01c-2.27-5.94-8.92-8.9-14.85-6.62c-5.93,2.27-8.89,8.92-6.62,14.85   c1.75,4.58,6.11,7.39,10.74,7.39C204.751,329.159,206.142,328.909,207.492,328.389z" />
            <path d="M195.872,277.589c-3.45-5.33-10.57-6.86-15.9-3.42c-5.34,3.44-6.87,10.56-3.43,15.9c2.2,3.41,5.9,5.26,9.67,5.26   c2.14,0,4.3-0.59,6.23-1.84C197.782,290.049,199.312,282.929,195.872,277.589z" />
            <path d="M154.392,246.059c-4.52,4.46-4.57,11.75-0.11,16.27c2.25,2.28,5.22,3.42,8.19,3.42c2.92,0,5.84-1.11,8.08-3.32   c4.52-4.46,4.56-11.74,0.1-16.26C166.191,241.649,158.912,241.599,154.392,246.059z" />
            <path d="M410.131,224.539c1.44,0,2.91-0.28,4.33-0.86c5.88-2.39,8.71-9.11,6.31-14.99c-2.4-5.88-9.11-8.7-14.99-6.31   c-5.88,2.4-8.71,9.11-6.31,14.99C401.292,221.829,405.592,224.539,410.131,224.539z" />
            <path d="M303.122,329.699c1.33,0.5,2.7,0.74,4.04,0.74c4.65,0,9.03-2.85,10.77-7.47c2.23-5.95-0.79-12.58-6.74-14.81   c-5.94-2.23-12.57,0.79-14.8,6.74C294.162,320.839,297.171,327.469,303.122,329.699z" />
            <path d="M295.881,367.01c0.58,0.09,1.17,0.14,1.74,0.14c5.59,0,10.49-4.09,11.35-9.78c0.96-6.28-3.36-12.14-9.64-13.09   c-6.28-0.96-12.14,3.36-13.09,9.64C285.282,360.199,289.602,366.059,295.881,367.01z" />
            <path d="M347.592,266.729c3,0,5.99-1.17,8.25-3.49c4.43-4.55,4.32-11.83-0.23-16.26c-4.55-4.43-11.83-4.33-16.26,0.23   c-4.43,4.55-4.33,11.83,0.23,16.26C341.812,265.639,344.702,266.729,347.592,266.729z" />
            <path d="M317.912,294.689c1.91,1.22,4.05,1.79,6.16,1.79c3.8,0.01,7.52-1.88,9.72-5.33c3.4-5.36,1.81-12.47-3.55-15.87   c-5.36-3.41-12.47-1.82-15.87,3.54C310.972,284.179,312.552,291.289,317.912,294.689z" />
          </g>
        </svg>

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "league") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = " ";
    if (prop.text == "big") {
      _class = _class + " big";
    }

    if (prop.amin) {
      _class = _class + " " + prop.amin;
    }
    var _class2 = "";
    if (prop.iconamin) {
      _class2 = _class2 + " " + prop.iconamin.replace("charkhesh", "");
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <div
          style={{
            transform: "scale(.8)",
            position: "absolute",
            zIndex: 300000,
            width: prop.width,
            height: prop.width,
            textAlign: "center",
          }}
        >
          <svg
            version="1.1"
            className="leagueicon icn"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 510.738 510.738"
            style={{
              width: prop.width,
              height: prop.width,
            }}
          >
            <text
              x="255"
              y="250"
              className={
                "leagueicontext text" +
                _txt.toString().length +
                " slow " +
                _class
              }
            >
              {_txt}
            </text>
          </svg>
        </div>
        <img
          src={"/assets/images/svg/league/icon.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: prop.width,
            position: "relative",
            zIndex: 1,
          }}
        />

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "gift3") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 = _class2 + " " + prop.iconamin;
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <img
          src={"/assets/images/svg/gift/icon.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "gift1") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 = _class2 + " " + prop.iconamin;
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <span
          className="inline animated"
          style={{
            width: prop.width,
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={"/assets/gift.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              width: prop.width,
              height: "auto",
            }}
          />
        </span>
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "gift2") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 = _class2 + " " + prop.iconamin;
    }
    return (
      <span onClick={prop.onClick} className="iconarea">
        <span
          className="inline animated"
          style={{
            width: prop.width,
            height: "auto",
            position: "relative",
            zIndex: 1,
            filter: "hue-rotate(-90deg)",
          }}
        >
          <img
            src={"/assets/gift.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              width: prop.width,
              height: "auto",
            }}
          />
        </span>
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
  if (prop.mode == "gifts") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 =
        _class +
        " " +
        prop.iconamin.replace("charkhesh", "").replace("inline", "") +
        " tada";
    }
    return (
      <div
        onClick={prop.onClick}
        className="iconarea"
        style={{
          width: prop.width,
          height: "auto",
          textAlign: "left",
        }}
      >
        <span
          style={{
            width: prop.width,
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={"/assets/images/svg/gift/icon.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
          />
        </span>
        <span
          style={{
            width: prop.width,
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            filter: "hue-rotate(-90deg)",
          }}
        >
          <img
            src={"/assets/gift.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              position: "absolute",

              transform: "translateX(30%) scale(.8) rotate(5deg)",
              transformOrigin: "center right",
            }}
          />
        </span>
        <span
          style={{
            width: prop.width,
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <img
            src={"/assets/gift.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              position: "absolute",

              transform: "translateX(-25%) scale(.7) rotate(-5deg)",
              transformOrigin: "center left",
            }}
          />
        </span>
      </div>
    );
  }

  if (prop.mode == "topplayer") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "vipicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 =
        _class +
        " " +
        prop.iconamin.replace("charkhesh", "").replace("inline", "") +
        " tada";
    }
    return (
      <div
        onClick={prop.onClick}
        className="iconarea"
        style={{
          width: prop.width,
          height: "auto",
          textAlign: "left",
        }}
      >
        <img
          src={"/assets/images/svg/topplayer/icon.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        />
        <span
          style={{
            width: prop.width,
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <img
            src={"/assets/topplayer.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              position: "absolute",

              transform: "translateX(25%) scale(.6) rotate(5deg)",
              transformOrigin: "center right",
            }}
          />
        </span>
        <span
          style={{
            width: prop.width,
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <img
            src={"/assets/chipblack.svg"}
            width={prop.width}
            height={prop.width}
            alt={prop.mode}
            style={{
              position: "absolute",

              transform: "translateX(-25%) scale(.5) rotate(-5deg)",
              transformOrigin: "center left",
            }}
          />
        </span>
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </div>
    );
  }
  if (prop.mode == "cashout") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "vipicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 =
        _class +
        " " +
        prop.iconamin.replace("charkhesh", "").replace("inline", "") +
        " tada";
    }
    return (
      <div
        onClick={prop.onClick}
        className="iconarea"
        style={{
          width: prop.width,
          height: "auto",
          textAlign: "left",
        }}
      >
        <img
          src={"/assets/images/svg/topplayer/cashout.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        />

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </div>
    );
  }
  if (prop.mode == "deposit") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = "leagueicon";
    if (prop.text == "big") {
      _class = _class + " big";
    }
    var _class2 = _class;
    if (prop.iconamin) {
      var _class2 =
        _class +
        " " +
        prop.iconamin.replace("charkhesh", "").replace("inline", "") +
        " tada";
    }
    return (
      <div onClick={prop.onClick} className="iconarea">
        <img
          src={"/assets/images/svg/topplayer/deposit.svg"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />
        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </div>
    );
  }

  if (prop.mode == "levels") {
    var _txt = prop.number ? prop.number : prop.level;
    var _class = levelClass(_txt - 1);

    var _id = _txt + _class.replace(/ /g, "") + Math.floor(Math.random() * 100);
    return (
      <span onClick={prop.onClick} className="iconarea">
        <img
          src={"/assets/images/avatars/lvl" + _txt + ".png"}
          width={prop.width}
          height={prop.width}
          alt={prop.mode}
          style={{
            width: prop.width,
            height: "auto",
          }}
        />

        {prop.text != "big" && prop.text != "" && (
          <div className="iconlabel">{prop.text}</div>
        )}
      </span>
    );
  }
};

export default LevelIcon;
