import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateContactFormDto } from './dto/create-contact-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactForm } from './entities/contact-form.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactFormService {
  constructor(
    @InjectRepository(ContactForm)
    private readonly contactFormRepository: Repository<ContactForm>,
  ) {}

  async create(createContactFormDto: CreateContactFormDto) {
    try {
      const contactForm =
        this.contactFormRepository.create(createContactFormDto);
      await this.contactFormRepository.save(contactForm);

      return contactForm;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e);
    }
  }
}
