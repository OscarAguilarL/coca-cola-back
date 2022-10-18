import { Module } from '@nestjs/common';
import { ContactFormService } from './contact-form.service';
import { ContactFormController } from './contact-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactForm } from './entities/contact-form.entity';

@Module({
  controllers: [ContactFormController],
  providers: [ContactFormService],
  imports: [TypeOrmModule.forFeature([ContactForm])],
})
export class ContactFormModule {
}
