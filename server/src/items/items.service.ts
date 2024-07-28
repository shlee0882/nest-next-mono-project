import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Item } from './schemas/item.schema'
import { CreateItemDto } from './dto/create-item.dto'
import { UpdateItemDto } from './dto/update-item.dto'

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec()
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findById(id).exec()
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`)
    }
    return item
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(createItemDto)
    return newItem.save()
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const existingItem = await this.itemModel
      .findByIdAndUpdate(id, updateItemDto, { new: true })
      .exec()
    if (!existingItem) {
      throw new NotFoundException(`Item #${id} not found`)
    }
    return existingItem
  }

  async remove(id: string): Promise<Item> {
    const deletedItem = await this.itemModel.findByIdAndDelete(id).exec()
    if (!deletedItem) {
      throw new NotFoundException(`Item #${id} not found`)
    }
    return deletedItem
  }
}