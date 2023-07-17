import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface IPropsAttachment {
  title: string
  link: string
}

export class Attachment extends Entity<IPropsAttachment> {
  get title() {
    return this.props.title
  }
  get link() {
    return this.props.link
  }

  static create(props: IPropsAttachment, id?: UniqueEntityId) {
    const attachment = new Attachment(props, id)
    return attachment
  }
}
