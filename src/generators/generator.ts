import Generator from "./generator-base"
import CorporateBS from "./corporate-bs"
import ChuckNorris from "./chuck-norris"
import UselessFact from "./useless-fact"
import Techy from "./techy"
import Yomamma from "./yomomma"
import Joke from "./joke"
import DadJoke from "./dad-joke"
import Quotes from "./quotes"

export const generators: Generator[] = [
  new CorporateBS(),
  new ChuckNorris(),
  new UselessFact(),
  new Techy(),
  new Yomamma(),
  new Joke(),
  new DadJoke(),
  new Quotes(),
]
