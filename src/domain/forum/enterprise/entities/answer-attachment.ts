import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface IPropsAnswerAttachment {
  answerId: UniqueEntityId
  attachmentId: UniqueEntityId
}

export class AnswerAttachment extends Entity<IPropsAnswerAttachment> {
  get answerId() {
    return this.props.answerId
  }
  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: IPropsAnswerAttachment, id?: UniqueEntityId) {
    const attachment = new AnswerAttachment(props, id)
    return attachment
  }
}
