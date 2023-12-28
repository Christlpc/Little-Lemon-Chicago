export const fetchAPI = (date) => {
    const result = [];

    for (let i = 17; i <= 23; i++) {
      if (date.getDay() === 6 || date.getDay() === 0) {
        result.push(i + ":00");
      } else {
        result.push(i + ":30");
      }
    }

    return result;
};

export const submitAPI = (formData) => {
    if (!true) 
        console.log(formData);
    return true;
  };

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return fetchAPI(action.date);
        default:
            return state;
    }
}

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
}