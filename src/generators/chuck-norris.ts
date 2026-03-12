import axios from "axios"
import Generator from "./generator-base"

export default class ChuckNorris extends Generator {
  name = "Chuck Norris"
  credits = {
    text: "chucknorris.io",
    url: "https://chucknorris.io",
  }
  async generate() {
    const response = await axios.get("https://api.chucknorris.io/jokes/random")
    return response.data.value
  }
}
