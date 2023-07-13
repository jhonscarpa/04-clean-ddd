import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../../enterprise/entities/answer'
import { Question } from '../../enterprise/entities/question'

interface IPropsChooseQuestionBestAnswerUseCase {
  answerId: string
  authorId: string
}
interface IPropsChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: IPropsChooseQuestionBestAnswerUseCase): Promise<IPropsChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }
    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not Allowed.')
    }

    question.bestAnswerId = answer.id
    await this.questionsRepository.save(question)

    return { question }
  }
}
