import { Either, left, right } from '@/core/either'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'
import { AnswerAttachmentList } from '../../enterprise/entities/answer-attachment-list'
import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerAttachmentRepository } from '../repositories/answer-attachments-repository'

interface IPropsEditAnswerUseCase {
  authorId: string
  answerId: string
  attachmentsIds: string[]
  content: string
}
type IPropsEditAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    answer: Answer
  }
>

export class EditAnswerUseCase {
  constructor(
    private answerAttachmentRepository: AnswerAttachmentRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    attachmentsIds,
    content,
  }: IPropsEditAnswerUseCase): Promise<IPropsEditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    const currentAnswerAttachment =
      await this.answerAttachmentRepository.findManyByAnswerId(answerId)
    const answerAttachmentList = new AnswerAttachmentList(
      currentAnswerAttachment,
    )

    const answerAttachments = attachmentsIds.map(attachmentId => {
      return AnswerAttachment.create({
        attachmentId: new UniqueEntityId(attachmentId),
        answerId: answer.id,
      })
    })
    answerAttachmentList.update(answerAttachments)
    answer.attachments = answerAttachmentList

    answer.content = content

    await this.answersRepository.save(answer)

    return right({
      answer,
    })
  }
}
