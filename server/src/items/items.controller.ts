import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { ItemsService } from './items.service'
import { CreateItemDto } from './dto/create-item.dto'
import { UpdateItemDto } from './dto/update-item.dto'
import { Item } from './schemas/item.schema'

@ApiTags('api/items')
@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiOperation({ summary: '모든 아이템 조회' })
  @ApiResponse({ status: 200, description: '성공적으로 조회됨.' })
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll()
  }

  @ApiOperation({ summary: '특정 아이템 조회' })
  @ApiResponse({ status: 200, description: '성공적으로 조회됨.' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id)
  }

  @ApiOperation({ summary: '아이템 생성' })
  @ApiResponse({ status: 201, description: '성공적으로 생성됨.' })
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto)
  }

  @ApiOperation({ summary: '아이템 수정' })
  @ApiResponse({ status: 200, description: '성공적으로 수정됨.' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return this.itemsService.update(id, updateItemDto)
  }

  @ApiOperation({ summary: '아이템 삭제' })
  @ApiResponse({ status: 200, description: '성공적으로 삭제됨.' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Item> {
    return this.itemsService.remove(id)
  }
}
