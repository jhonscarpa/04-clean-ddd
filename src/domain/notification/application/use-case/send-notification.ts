import { Either, right } from '@/core/either'
import { Notification } from '../../enterprise/entities/notification'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotificationsRepository } from '../repositories/notifications-repository'

interface IPropsSendNotificationUseCase {
  recipientId: string
  title: string
  content: string
}
type IPropsSendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    content,
    title,
  }: IPropsSendNotificationUseCase): Promise<IPropsSendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityId(recipientId),
      content,
      title,
    })

    await this.notificationsRepository.create(notification)

    return right({
      notification,
    })
  }
}
