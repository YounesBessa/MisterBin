<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211117131550 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bin DROP FOREIGN KEY FK_AA275AED8BAC62AF');
        $this->addSql('DROP INDEX IDX_AA275AED8BAC62AF ON bin');
        $this->addSql('ALTER TABLE bin DROP city_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bin ADD city_id INT NOT NULL');
        $this->addSql('ALTER TABLE bin ADD CONSTRAINT FK_AA275AED8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('CREATE INDEX IDX_AA275AED8BAC62AF ON bin (city_id)');
    }
}
