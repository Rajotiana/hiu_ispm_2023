import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const Admin = () => {
  const [image, setImage] = useState<null | File>(null);

  const [data, setData] = useState<string>("");

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
      <Grid spacing={3} container p={3}>
        <Grid item xs={12}>
          <Card>
            <Stack spacing={5}>
              {image && (
                <img
                  alt=""
                  src={URL.createObjectURL(image)}
                  style={{
                    width: 260,
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
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <Stack
              spacing={5}
              width={400}
              alignItems="flex-start"
              justifyContent="center"
              p={3}
            >
              <Typography variant="h3">Result :</Typography>
              <Stack direction="row" spacing={2}>
                <Typography>exam_id : </Typography>
                <Typography fontWeight="bold">{data.split(" ")[2]}</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography>subject : </Typography>
                <Typography fontWeight="bold">{data.split(" ")[6]}</Typography>
              </Stack>
              <Button variant="contained">Validate</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;
