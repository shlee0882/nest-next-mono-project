import { ApiProperty } from '@nestjs/swagger'

export class UpdateItemDto {
  @ApiProperty({
    example: 'Updated item name',
    description: 'The name of the item',
    required: false,
  })
  readonly name?: string

  @ApiProperty({
    example: 'Updated item description',
    description: 'The description of the item',
    required: false,
  })
  readonly description?: string

  @ApiProperty({
    example: 15,
    description: 'The quantity of the item',
    required: false,
  })
  readonly quantity?: number
}
