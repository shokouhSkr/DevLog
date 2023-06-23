export const setSidebarState = (state: boolean) => {
  localStorage.setItem("sidebarState", JSON.stringify(state));
};

export const getSidebarState = () => {
  const result = localStorage.getItem("sidebarState");
  const isSidebarOpen = result ? JSON.parse(result) : false;

  return isSidebarOpen;
};
