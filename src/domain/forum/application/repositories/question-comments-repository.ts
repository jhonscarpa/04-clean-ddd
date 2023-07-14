import { IPropsPaginationParams } from '@/core/repositories/pagination-params'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  findManyByQuestionId(
    questionId: string,
    params: IPropsPaginationParams,
  ): Promise<QuestionComment[]>
  create(question: QuestionComment): Promise<void>
  delete(question: QuestionComment): Promise<void>
}
