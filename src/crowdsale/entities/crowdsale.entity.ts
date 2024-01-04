import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('crowdsales')
export class Crowdsale extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  crowdsaleAddress: string;

  @Column()
  tokenName: string;

  @Column()
  tokenSymbol: string;

  @Column('integer')
  tokenDecimals: number;

  @Column()
  tokenAddress: string;

  @Column()
  tokenImageUrl: string;

  @Column()
  presaleImageUrl: string;

  @Column()
  twitterUrl: string;

  @Column()
  telegramUrl: string;

  @Column()
  websiteUrl: string;

  @Column({ nullable: true })
  miscellaneousUrl: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  crowdsaleTokenAllocated: string;

  @Column()
  crowdsaleStartTime: string;

  @Column()
  crowdsaleEndTime: string;

  @Column()
  vestingStart: string;

  @Column()
  vestingEnd: string;

  @Column()
  cliffDuration: string;

  @Column()
  minimumTokenSaleAmount: string;

  @Column()
  maxUserAllocation: string;

  @Column()
  inputTokenRate: string;

  @Column({ type: 'jsonb' })
  inputTokens: any;

  @Column('boolean')
  isVerified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
