import { Either, left, right } from '@/core/either'
import { QuestionCommentsRepository } from './../repositories/question-comments-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'

interface IPropsDeleteQuestionCommentUseCase {
  authorId: string
  questionCommentId: string
}
type IPropsDeleteQuestionCommentUseCaseResponse =Either<ResourceNotFoundError | NotAllowedError, {}>

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: IPropsDeleteQuestionCommentUseCase): Promise<IPropsDeleteQuestionCommentUseCaseResponse> {
    const questionComment = await this.questionCommentsRepository.findById(
      questionCommentId,
    )

    if (!questionComment) {
      return left(new ResourceNotFoundError())
    }

    if (questionComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError())

    }

    await this.questionCommentsRepository.delete(questionComment)
    return right({})
  }
}
