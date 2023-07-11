import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  IPropsQuestion,
  Question,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<IPropsQuestion> = {}) {
  const question = Question.create({
    title: 'Example question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityId(),
    content: 'Example content',
    ...override,
  })
  return question
}
