import axios from "axios";

const getOneProduct = async (id) => {
  try {
    const { data } = await axios({
      headers: { "content-type": "application/json" },
      url: `${process.env.REACT_APP_URL}/products/${id}`,
      method: "GET",
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getOneProduct;
