import { UserProfile } from '@type-safe-full-stack/shared/domain';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'UserProfiles' })
export class UserProfileEntity implements UserProfile {
  @PrimaryColumn('text')
  id!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;
}
