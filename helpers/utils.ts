// LOCAL STORAGE

export const setSidebarState = (state: boolean) => {
  return localStorage.setItem("sidebarState", JSON.stringify(state));
};

export const getSidebarState = () => {
  const storedValue = localStorage.getItem("sidebarState");
  return storedValue !== null ? JSON.parse(storedValue) : false;
};

////////////////////////////////////////////////////////////////
//
