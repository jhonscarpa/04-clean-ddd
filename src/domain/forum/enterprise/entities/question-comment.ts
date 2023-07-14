import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Comment, IPropsComment } from './comment'

export interface IPropsQuestionComment extends IPropsComment {
  questionId: UniqueEntityId
}

export class QuestionComment extends Comment<IPropsQuestionComment> {
  get questionId() {
    return this.props.questionId
  }

  static create(
    props: Optional<IPropsQuestionComment, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const questionComment = new QuestionComment(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return questionComment
  }
}
