import { Entity } from '../../core/entities/entity'

interface IPropsAnswer {
  content: string
  authorId: string
  questionId: string
}

export class Answer extends Entity<IPropsAnswer> {
  get content() {
    return this.props.content
  }


}
