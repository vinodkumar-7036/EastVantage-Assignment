export const getUserDetails = async (setIsRefresh: any): Promise<void> => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const jsonData = await response.json();
    localStorage.setItem("UserDetails", JSON.stringify(jsonData));
    setIsRefresh(false);
  } catch {}
};
