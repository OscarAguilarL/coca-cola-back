import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateContactFormDto } from './dto/create-contact-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactForm } from './entities/contact-form.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ContactFormService {
  constructor(
    @InjectRepository(ContactForm)
    private readonly contactFormRepository: Repository<ContactForm>,
    private dataSource: DataSource,
  ) {}

  async create(createContactFormDto: CreateContactFormDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const contactForm =
        this.contactFormRepository.create(createContactFormDto);

      await queryRunner.manager.save(contactForm);
      await queryRunner.commitTransaction();

      return contactForm;
    } catch (e) {
      console.log(e);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(e);
    } finally {
      queryRunner.release();
    }
  }
}
