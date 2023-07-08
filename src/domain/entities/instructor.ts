import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'

interface IPropsInstructor {
  name: string
}

export class Instructor extends Entity<IPropsInstructor> {
  static create(props: IPropsInstructor, id?: UniqueEntityId) {
    const instructor = new Instructor(
      {
        ...props,
      },
      id,
    )

    return instructor
  }
}
