import { AnswerAttachmentRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

export class InMemoryAnswerAttachmentsRepository
  implements AnswerAttachmentRepository
{
  public items: AnswerAttachment[] = []

  async findManyByAnswerId(answerId: string) {
    const answerAttachment = this.items.filter(
      item => item.answerId.toString() === answerId,
    )

    return answerAttachment
  }

  async deleteManyByAnswerId(answerId: string) {
    const answerAttachment = this.items.filter(
      item => item.answerId.toString() !== answerId,
    )
    this.items = answerAttachment
  }
}

import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { IPropsQuestionAttachment, QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'


export function makeQuestionAttachment(
  override: Partial<IPropsQuestionAttachment> = {},
  id?: UniqueEntityId,
) {
  const questionAttachment = QuestionAttachment.create(
    {
      questionId: new UniqueEntityId(),
      attachmentId: new UniqueEntityId(),
      ...override,
    },
    id,
  )
  return questionAttachment
}
