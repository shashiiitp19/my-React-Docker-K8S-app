import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [errorFound, setError] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Something Went wrong",
        message: "Please enter valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age(> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUsername("");
    console.log(enteredUsername, enteredUserAge);
  };
  const enteredUserNameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const enteredUserAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
    setEnteredUserAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {errorFound && (
        <ErrorModel
          title={errorFound.title}
          message={errorFound.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={enteredUserNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={enteredUserAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
