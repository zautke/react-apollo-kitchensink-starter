const startingRequest = () => {
  return {
    type: "STARTING_REQUEST"
  };
};
const finishedRequest = response => {
  return {
    type: "FINISHED_REQUEST",
    response: response
  };
};
