import { Either, left, right } from '@/core/either'
import { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'

interface IPropsDeleteQuestionUseCase {
  authorId: string
  questionId: string
}
type IPropsDeleteQuestionUseCaseResponse = Either<ResourceNotFoundError|NotAllowedError,{}>

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    authorId,
  }: IPropsDeleteQuestionUseCase): Promise<IPropsDeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())

    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())

    }

    await this.questionsRepository.delete(question)

    return right({})
  }
}
