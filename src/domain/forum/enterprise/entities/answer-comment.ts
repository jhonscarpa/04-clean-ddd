import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Comment, IPropsComment } from './comment'

export interface IPropsAnswerComment extends IPropsComment {
  answerId: UniqueEntityId
}

export class AnswerComment extends Comment<IPropsAnswerComment> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<IPropsAnswerComment, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return answerComment
  }
}
