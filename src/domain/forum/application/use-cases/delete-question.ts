import { QuestionsRepository } from '../repositories/questions-repository'

interface IPropsDeleteQuestionUseCase {
  authorId: string
  questionId: string
}
interface IPropsDeleteQuestionUseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    authorId,
  }: IPropsDeleteQuestionUseCase): Promise<IPropsDeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed')
    }

    await this.questionsRepository.delete(question)

    return {}
  }
}