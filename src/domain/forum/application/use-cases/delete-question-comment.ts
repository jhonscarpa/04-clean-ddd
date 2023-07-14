import { QuestionCommentsRepository } from './../repositories/question-comments-repository'

interface IPropsDeleteQuestionCommentUseCase {
  authorId: string
  questionCommentId: string
}
interface IPropsDeleteQuestionCommentUseCaseResponse {}

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
      throw new Error('Question comment not found')
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed')
    }

    await this.questionCommentsRepository.delete(questionComment)
    return {}
  }
}
