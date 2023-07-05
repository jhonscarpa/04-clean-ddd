import { Answer } from '../entities/answer'

interface IPropsAnswerQuestionUseCase {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({ instructorId, questionId, content }: IPropsAnswerQuestionUseCase) {
    const answer = new Answer(content)
    return answer
  }
}
