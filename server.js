const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/paraphrase", async (req, res) => {
  const inputText = req.body.input;
  try {
    const response = await axios.post(
      "https://paraphraser1.p.rapidapi.com/",
      {
        input: inputText,
      },
      {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "283cb8db9dmsh28e27de947a855dp17a818jsn88b265dc15f3",
          "X-RapidAPI-Host": "paraphraser1.p.rapidapi.com",
        },
      }
    );

    const paraphrasedText = response.data.output;
    res.json({ paraphrasedText });
  } catch (error) {
    res.status(500).json({ error: "Error al parafrasear el texto." });
  }
});

app.listen(3000, () => {
  console.log(`Servidor en ejecución en el puerto 3000.`);
});
