import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface IPropsFetchRecentQuestionsUseCase {
  page: number
}
type IPropsFetchRecentQuestionsUseCaseResponse = Either<null, {
  questions: Question[]
}>

export class FetchRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: IPropsFetchRecentQuestionsUseCase): Promise<IPropsFetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}
