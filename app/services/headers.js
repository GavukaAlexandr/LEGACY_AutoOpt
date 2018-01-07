import Cookies from "universal-cookie";
const cookies = new Cookies();

export default () => {
  const HEADERS = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`
  };

  return HEADERS;
};
