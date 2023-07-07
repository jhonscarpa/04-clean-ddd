import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'

interface IPropsQuestion {
  title: string
  content: string
  authorId: string
  slug: Slug
}

export class Question extends Entity<IPropsQuestion> {
 
}
