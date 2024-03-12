import axios from "axios";

const getAllProducts = async () => {
  try {
    const { data } = await axios({
      headers: { "content-type": "application/json" },
      method: "GET",
      url: `${process.env.REACT_APP_URL}/products`,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getAllProducts;
