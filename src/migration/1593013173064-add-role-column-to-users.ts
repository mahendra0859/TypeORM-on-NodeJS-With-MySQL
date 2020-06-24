import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addRoleColumnToUsers1593013173064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userTable = await queryRunner.getTable('users');
    const roleColumn = new TableColumn({ name: 'role', type: 'int' });
    await queryRunner.addColumn(userTable, roleColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userTable = await queryRunner.getTable('users');
    await queryRunner.dropColumn(userTable, 'role');
  }
}
