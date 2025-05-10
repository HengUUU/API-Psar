import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  
    @IsPositive()
    limit?: number;
    
}
