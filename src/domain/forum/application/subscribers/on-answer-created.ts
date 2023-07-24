import { SendNotificationUseCase } from './../../../notification/application/use-case/send-notification'
import { QuestionsRepository } from './../repositories/questions-repository'
import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { AnswerCreatedEvent } from '../../enterprise/events/answer-created-event'

export class OnAnswerCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotificationUseCase: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    )
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (question) {
      await this.sendNotificationUseCase.execute({
        recipientId: question?.authorId.toString(),
        title: `Nova resposta em ${question.title
          .substring(0, 40)
          .concat('...')}`,
        content: answer.excerpt,
      })
    }
  }
}
