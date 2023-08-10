import React, { useReducer, useRef } from "react";
import { INITIAL_FORM_STATE, formReducer } from "../reducers/formReducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const tagRef = useRef(null);

  const handleChange = (e) => {
    // console.log("e.target.vale", typeof e.target.value);
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleTags = () => {
    const tagData = tagRef.current?.value?.split(",");
    console.log("tagData", tagData);
    tagData?.forEach((tag) => {
      dispatch({ type: "ADD_TAGS", payload: tag });
    });
    // const tags = tagData?.split(",");
    // console.log("tags", tags);
    tagRef.current.value = "";
  };
  console.log("state", state);
  return (
    <div>
      <h3>Product Form</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "15px",
        }}
      >
        <input
          type="text"
          name="title"
          style={{ marginBottom: "15px" }}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="desc"
          style={{ marginBottom: "15px" }}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          style={{ marginBottom: "15px" }}
          placeholder="Price"
          onChange={handleChange}
        />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          style={{ marginBottom: "15px" }}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          {state.tags?.map((tag, index) => {
            return (
              <span
                onClick={() => dispatch({ type: "REMOVE_TAGS", payload: tag })}
                key={index}
              >
                <button
                  type="button"
                  style={{ cursor: "pointer", padding: "10px" }}
                >
                  {tag}
                </button>
              </span>
            );
          })}
        </div>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {/* {product.tags.map((tag) => (
            <small key={tag}>
              {tag}
            </small>
          ))} */}
        </div>
        <div className="quantity" style={{ marginTop: "10px" }}>
          <button type="button" onClick={() => dispatch({ type: "DECREASE" })}>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={() => dispatch({ type: "INCREASE" })}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
