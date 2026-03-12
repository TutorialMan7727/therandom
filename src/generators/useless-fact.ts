import axios from "axios"
import Generator from "./generator-base"

export default class UselessFact extends Generator {
  name = "Useless Fact"
  credits = {
    text: "https://uselessfacts.jsph.pl/",
    url: "https://uselessfacts.jsph.pl/",
  }
  async generate() {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    )
    return response.data.text
  }
}
