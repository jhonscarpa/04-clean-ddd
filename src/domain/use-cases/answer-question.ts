import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface IPropsAnswerQuestionUseCase {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: IPropsAnswerQuestionUseCase) {
    const answer = Answer.create({
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
    })

    await this.answersRepository.create(answer)
    return answer
  }
}
