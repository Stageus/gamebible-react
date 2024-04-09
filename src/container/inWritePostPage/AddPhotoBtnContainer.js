import React, { useEffect, useState } from "react";
import AddPhotoBtnItem from "../../component/AddPhotoBtnItem";
import useFetch from "../../hook/useFetch";
import { useCookies } from "react-cookie";

const AddPhotoBtnContainer = (props) => {
  const [image, setImage] = useState([]);
  const [cookies] = useCookies(["token"]);
  const { postIdx } = props;
  const [data, setData] = useState(null);
  const fileInput = React.useRef(null);
  const formData = new FormData();

  const addPhotoClickEvent = async () => {
    fileInput.current.click();
  };

  const fileChangeEvent = (event) => {
    formData.append("images", event.target.files[0]);
    postPhoto();
  };

  const postPhoto = async () => {
    try {
      const response = await fetch(`http://192.168.0.18:3000/post/${postIdx}/image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
        body: formData,
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <AddPhotoBtnItem {...{ setImage, addPhotoClickEvent, fileInput, fileChangeEvent }} />;
    </>
  );
};
export default AddPhotoBtnContainer;
