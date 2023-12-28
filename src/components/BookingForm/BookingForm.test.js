import { initializeTimes, updateTimes, fetchAPI, submitAPI } from './utils/global';

test("initializeTimes function is equal to featchAPI", () => {
  const weekDay = new Date();
  const initial = initializeTimes();
  const expected = fetchAPI(weekDay);
  expect(expected).toEqual(initial);
});

test("updateTimes returns the same state", () => {
  const state = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const action = { type: "SOME_ACTION" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});

test("submitAPI returns true", () => {
  const formData = {
    date: "2023/07/18",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});

test("reading local storage", () => {
  const result = localStorage.getItem("booking");
  expect(result).not.toHaveLength();
});