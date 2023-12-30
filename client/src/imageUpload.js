import React from 'react';
import { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState('');

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  function  handleApi() {
    const formData = new FormData();
    formData.append('image', image);

    // todo create a post axois call for image
    // axios.post('url', formData).then((res) => {console.log(res)})
  }
  return (
    <div>
      <input type="file" name="file" onChange={handleImage} />
      <button onClick={handleApi}>Submit</button>
    </div>
  );
}

export default ImageUpload;
