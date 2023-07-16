import { Either, left, right } from "@/core/either"
import { AnswersRepository } from "../repositories/answers-repository"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"
import { NotAllowedError } from "./errors/not-allowed-error"

interface IPropsDeleteAnswerUseCase {
  authorId: string
  answerId: string
}
type IPropsDeleteAnswerUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {}>

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: IPropsDeleteAnswerUseCase): Promise<IPropsDeleteAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())

    }

    await this.answerRepository.delete(answer)

    return right({})
  }
}
