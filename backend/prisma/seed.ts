import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const categories = [
    'Beaches',
    'Hill Country',
    'Wildlife',
    'Cultural Heritage',
    'Adventure',
    'Nature'
  ];

  const languages = [
    'English',
    'Sinhala',
    'Tamil',
    'German',
    'French',
    'Japanese',
    'Chinese'
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  for (const name of languages) {
    await prisma.language.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  console.log(`Seeded ${categories.length} categories and ${languages.length} languages.`);
}

main()
  .catch((error: unknown) => {
    console.error('Database seeding failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());