import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface IPropsStudent {
  name: string
}

export class Student extends Entity<IPropsStudent> {
  static create(props: IPropsStudent, id?: UniqueEntityId) {
    const student = new Student(
      {
        ...props,
      },
      id,
    )

    return student
  }
}
