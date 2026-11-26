import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto.js';
import { IsNotEmpty } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
     @IsNotEmpty({message: 'Name is required'})
        name: string;
}
