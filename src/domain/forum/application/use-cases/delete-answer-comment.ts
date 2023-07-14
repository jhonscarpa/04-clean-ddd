import { AnswerCommentsRepository } from './../repositories/answer-comments-repository'

interface IPropsDeleteAnswerCommentUseCase {
  authorId: string
  answerCommentId: string
}
interface IPropsDeleteAnswerCommentUseCaseResponse {}

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: IPropsDeleteAnswerCommentUseCase): Promise<IPropsDeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentsRepository.findById(
      answerCommentId,
    )

    if (!answerComment) {
      throw new Error('Answer comment not found')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed')
    }

    await this.answerCommentsRepository.delete(answerComment)
    return {}
  }
}
