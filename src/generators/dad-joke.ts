import axios from "axios"
import Generator from "./generator-base"

export default class DadJoke extends Generator {
  name = "Dad Joke"
  credits = {
    text: "https://icanhazdadjoke.com/",
    url: "https://icanhazdadjoke.com/",
  }
  async generate() {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "text/plain",
      },
    })
    return response.data
  }
}
