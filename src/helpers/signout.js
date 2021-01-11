const clearSession = () => {
  localStorage.removeItem("user");
  console.log("Clear")
};

export default clearSession;
