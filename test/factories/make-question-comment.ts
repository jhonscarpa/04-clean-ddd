import { faker } from '@faker-js/faker'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

import {
  IPropsQuestionComment,
  QuestionComment,
} from '@/domain/forum/enterprise/entities/question-comment'

export function makeQuestionComment(
  override: Partial<IPropsQuestionComment> = {},
  id?: UniqueEntityId,
) {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueEntityId(),
      questionId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )
  return questionComment
}
