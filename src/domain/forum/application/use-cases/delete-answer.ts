import { AnswersRepository } from "../repositories/answers-repository"

interface IPropsDeleteAnswerUseCase {
  authorId: string
  answerId: string
}
interface IPropsDeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: IPropsDeleteAnswerUseCase): Promise<IPropsDeleteAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed')
    }

    await this.answerRepository.delete(answer)

    return {}
  }
}
