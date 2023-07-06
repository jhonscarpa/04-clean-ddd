import { randomUUID } from 'node:crypto'
import { Slug } from './value-objects/slug'

interface IPropsQuestion {
  title: string
  content: string
  authorId: string
  slug: Slug
}

export class Question {
  public id: string
  public title: string
  public slug: Slug
  public content: string
  public authorId: string

  constructor(props: IPropsQuestion, id?: string) {
    this.title = props.title
    this.content = props.content
    this.slug = props.slug
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}
