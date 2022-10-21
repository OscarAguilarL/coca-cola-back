import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ContactFormService } from './contact-form.service';
import { CreateContactFormDto } from './dto/create-contact-form.dto';

@Controller('contact-form')
export class ContactFormController {
  constructor(private readonly contactFormService: ContactFormService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createContactFormDto: CreateContactFormDto) {
    return this.contactFormService.create(createContactFormDto);
  }
}
