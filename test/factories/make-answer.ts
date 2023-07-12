import { faker } from '@faker-js/faker'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

import { Answer, IPropsAnswer } from '@/domain/forum/enterprise/entities/answer'

export function makeAnswer(
  override: Partial<IPropsAnswer> = {},
  id?: UniqueEntityId,
) {
  const answer = Answer.create(
    {
      questionId: new UniqueEntityId(),
      authorId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )
  return answer
}
