import React from "react";

const Input = () => {
  return (
    <div className="Input">
      <input type="text" placeholder="Type something..." />
      <div className="Send">
        <img src="" alt="Attach" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="" alt="Image" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
