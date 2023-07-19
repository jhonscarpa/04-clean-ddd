
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { IPropsAnswerAttachment, AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'


export function makeAnswerAttachment(
  override: Partial<IPropsAnswerAttachment> = {},
  id?: UniqueEntityId,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueEntityId(),
      attachmentId: new UniqueEntityId(),
      ...override,
    },
    id,
  )
  return answerAttachment
}
