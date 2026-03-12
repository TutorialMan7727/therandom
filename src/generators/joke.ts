import axios from "axios"
import Generator from "./generator-base"

export default class Joke extends Generator {
  name = "Joke"
  credits = {
    text: "https://jokeapi.dev/",
    url: "https://jokeapi.dev/",
  }
  async generate() {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky"
    )
    if (response.data.type === "single") return response.data.joke
    else return `${response.data.setup}\n${response.data.delivery}`
  }
}
