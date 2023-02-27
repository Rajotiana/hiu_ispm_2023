import { Button, Card, Container, Stack } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const Admin = () => {
  const [image, setImage] = useState<null | File>(null);

  const [dataa, setData] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (image) {
        const worker = await createWorker();

        (async () => {
          await worker.loadLanguage("eng");
          await worker.initialize("eng");
          const {
            data: { text },
          } = await worker.recognize(image);
          setData(text);
          console.log(text);
          await worker.terminate();
        })();
      }
    })();
  }, [image]);

  const handleInputFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      setImage(event.currentTarget.files[0]);

      event.currentTarget.value = "";
    }
  };

  return (
    <Container>
      <Stack spacing={5}>
        {image && (
          <img
            alt=""
            src={URL.createObjectURL(image)}
            style={{
              width: 400,
            }}
          />
        )}
        <Button variant="contained" component="label">
          Choose an image
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleInputFileChange}
          />
        </Button>
        <Card>{dataa}</Card>
      </Stack>
    </Container>
  );
};

export default Admin;
