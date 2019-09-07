import React, { useState, useEffect, useContext } from "react";
import { Button } from "../../components/Button/Button";
import { FormRow } from "../../components/FormRow/FormRow";
import { Input } from "../../components/Input/Input";
import { UploadInput } from "../../components/UploadInput/UploadInput";
import { Headline } from "../../components/Headline/Headline";
import { Preview } from "../../components/Preview/Preview";
import { UserContext } from "../../context/UserContext";

export const UploadForm: React.FC = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputFile, setInputFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  const handleTitleChange = (evnt: React.SyntheticEvent<HTMLInputElement>) => {
    setInputTitle(evnt.currentTarget.value);
  };

  const handleFileChange = (evnt: React.SyntheticEvent<HTMLInputElement>) => {
    evnt.preventDefault();
    if (!evnt.currentTarget.files) {
      return;
    }
    const input = evnt.currentTarget.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsArrayBuffer(input);
    reader.onload = () => {
      setInputFile(reader.result);

      if (reader.result) {
        const blob = new Blob([reader.result], { type: "image/jpeg" });
        const urlCreator = window.URL;
        const imageUrl = urlCreator.createObjectURL(blob);
        setImageUrl(imageUrl);
      }
    };
  };

  const handleSubmit = async (evnt: React.SyntheticEvent<HTMLFormElement>) => {
    evnt.preventDefault();

    await fetch("./netlify/netlify-webhooks/contentful-webhook", {
      headers: {
        Authorization: `Bearer ${user.token && user.token.access_token}`
      }
    });

    console.log("called...");
  };

  console.log("imageUrl", imageUrl);
  return (
    <form onSubmit={evnt => handleSubmit(evnt)}>
      <Headline>Upload your image to contentful</Headline>
      <Preview src={imageUrl} altAttr={inputTitle} />
      <UploadInput>
        <input
          type="file"
          onChange={evnt => handleFileChange(evnt)}
          accept="image/jpeg"
          size={5 * 1024 * 1024}
          id="upload"
          hidden={true}
        />
      </UploadInput>
      <FormRow id="title" label="Title">
        <Input
          id="title"
          placeholder="Type your image title..."
          onChange={handleTitleChange}
          value={inputTitle}
        />
      </FormRow>
      <Button type="submit">Upload image</Button>
    </form>
  );
};
