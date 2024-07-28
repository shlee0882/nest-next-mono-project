import { ApiProperty } from '@nestjs/swagger'

export class CreateItemDto {
  @ApiProperty({ example: 'Item name', description: 'The name of the item' })
  readonly name: string

  @ApiProperty({
    example: 'Item description',
    description: 'The description of the item',
  })
  readonly description: string

  @ApiProperty({ example: 10, description: 'The quantity of the item' })
  readonly quantity: number
}
