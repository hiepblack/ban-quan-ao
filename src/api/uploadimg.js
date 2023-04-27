import axios from "axios";
import { message } from "antd";

export const uploadImage = async (files) => {
  console.log(files);
  var load = true;
  try {
    const urls = [];
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "upload-img");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/ddn4r33s3/image/upload",
        formData
      );
      urls.push(res.data.secure_url);
    }

    load = false;
    return urls;
  } catch (err) {
    console.error(err);
    load = false;
    message.error("Upload failed");
  }
};
