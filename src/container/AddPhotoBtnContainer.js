import React, { useEffect, useState } from "react";
import AddPhotoBtnItem from "../component/AddPhotoBtnItem";
import useFetch from "../hook/useFetch";
import { useCookies } from "react-cookie";

const AddPhotoBtnContainer = (props) => {
  const { setPreview, POSTUrl } = props;
  const [image, setImage] = useState([]);
  const [cookies] = useCookies(["token"]);
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
      const response = await fetch(POSTUrl, {
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
    if (data) {
      const imageURL = data.data;
      setPreview((previews) => [...previews, { imageURL, id: data.data }]);
    }
    console.log(data);
  }, [data]);
  return (
    <>
      <AddPhotoBtnItem {...{ setImage, addPhotoClickEvent, fileInput, fileChangeEvent }} />;
    </>
  );
};
export default AddPhotoBtnContainer;
