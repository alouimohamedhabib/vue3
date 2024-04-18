interface ProductObject {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Rating {
  rate: number
  count: number
}

type CreateQuizOutputCustom = {
  question: string
  options: quizItemObject[]
}
type quizItemObject = {
  text: string
  value: number
}
export { ProductObject, Rating, CreateQuizOutputCustom, quizItemObject }
