import { IPropsPaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>
  findManyByAnswerId(
    answerId: string,
    params: IPropsPaginationParams,
  ): Promise<AnswerComment[]>
  create(question: AnswerComment): Promise<void>
  delete(question: AnswerComment): Promise<void>
}
