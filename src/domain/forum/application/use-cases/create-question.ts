import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Either, right } from '@/core/either'
import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

interface IPropsCreateQuestionUseCase {
  authorId: string
  title: string
  content: string
  attachmentsIds: string[]
}
type IPropsCreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question
  }
>

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    content,
    title,
    attachmentsIds,
  }: IPropsCreateQuestionUseCase): Promise<IPropsCreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      content,
      title,
    })
    const questionAttachments = attachmentsIds.map(attachmentId => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityId(attachmentId),
        questionId: question.id,
      })
    })
    question.attachments = questionAttachments

    await this.questionsRepository.create(question)

    return right({
      question,
    })
  }
}
