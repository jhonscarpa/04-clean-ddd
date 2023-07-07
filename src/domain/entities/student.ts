import { Entity } from '../../core/entities/entity'

interface IPropsStudent {
  name: string
}

export class Student extends Entity<IPropsStudent> {}
