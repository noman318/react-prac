/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useRef } from "react";
import { FORM_INITIAL_STATE, fromReducer } from "../reducers/formReducer";

const ProductForm = () => {
  const [state, dispatch] = useReducer(fromReducer, FORM_INITIAL_STATE);
  const tagRef = useRef(null);
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FORM_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  //   useEffect(() => {
  //     console.log("state in useEffect", state);
  //   }, [state]);
  const handleTags = () => {
    const tagData = tagRef.current.value;
    // console.log("tagData", tagData);
    const tagArr = tagData?.split(",");
    console.log("tagArr", tagArr);
    tagArr.forEach((tag) => {
      dispatch({ type: "ADD_TAGS", payload: tag });
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here, using the state data
    console.log("Form submitted with state:", state);
  };
  return (
    <div>
      <h3>Product Form</h3>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Title"
            onChange={handleChange}
            name="title"
          />
          <input
            type="text"
            placeholder="Desc"
            onChange={handleChange}
            name="desc"
          />
          <input
            type="number"
            placeholder="Price"
            onChange={handleChange}
            name="price"
          />
          <label htmlFor="category">Category:</label>
          <select onChange={handleChange} name="category">
            <option value="sneakers">Sneakers</option>
            <option value="tshirts">T-shirts</option>
            <option value="jeans">Jeans</option>
          </select>
          <label htmlFor="tags">Tags:</label>
          <textarea
            onChange={handleChange}
            // name="tags"
            cols="3"
            rows="3"
            ref={tagRef}
          ></textarea>
          <button type="button" onClick={handleTags}>
            ADD TAGS
          </button>
          <div>
            {state.tags?.map((tag) => (
              <small
                key={tag}
                onClick={() => {
                  dispatch({ type: "REMOVE_TAGS", payload: tag });
                }}
              >
                <br />
                {tag}
                <br />
              </small>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button
              onClick={() => {
                dispatch({ type: "DECREASE" });
              }}
              type="button"
              style={{ height: "20px" }}
            >
              -
            </button>
            <h6>Quantity ({state.quantity})</h6>
            <button
              onClick={() => {
                dispatch({ type: "INCREASE" });
              }}
              type="button"
              style={{ height: "20px" }}
            >
              +
            </button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
