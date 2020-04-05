import { BackendUiRestModule } from '@type-safe-full-stack/backend/ui-rest';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BackendUiRestModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1qazxsw2',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    })
  ]
})
export class AppModule {}
