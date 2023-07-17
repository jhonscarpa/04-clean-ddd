import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface IPropsQuestionAttachment {
  questionId: UniqueEntityId
  attachmentId: UniqueEntityId
}

export class QuestionAttachment extends Entity<IPropsQuestionAttachment> {
  get questionId() {
    return this.props.questionId
  }
  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: IPropsQuestionAttachment, id?: UniqueEntityId) {
    const attachment = new QuestionAttachment(props, id)
    return attachment
  }
}
