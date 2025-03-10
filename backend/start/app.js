/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/lucid-slugify/providers/SlugifyProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/redis/providers/RedisProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-acl/providers/AclProvider',
  'adonis-kue/providers/KueProvider',
];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-acl/providers/CommandsProvider',
  'adonis-kue/providers/CommandsProvider',
];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  Role: 'Adonis/Acl/Role',
  Permission: 'Adonis/Acl/Permission',
};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [];

const jobs = ['App/Jobs/InvitationEmail'];

module.exports = { providers, aceProviders, aliases, commands, jobs };
