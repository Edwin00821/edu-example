import { type Topics } from '../types'

export const KNOWLEDGE = [
  'Instalación y configuración de MongoDB Server.',
  'Entender la diferencia entre una base de datos de tipo SQL y No-SQL.',
  'Te convertiras en un experto al realizar operaciones CRUD en MongoDB.',
  'Podrás manejar los distintos Tipos de Datos en MongoDB.',
  'Serás un experto en el Modelado de Datos en MongoDB.',
  'Esquema y Validación del Modelo de Datos.',
  'Aprenderas a manejar y crear los índices.',
  'Podrás trabajar con datos GeoJSON y crear índices Geoespacial.',
  'Instalación y configuración de MongoDB Compass.',
  'Aprenderás a trabajar con el framework de agregación para transformar tus datos',
]

export const TOPICS: Topics[] = [
  {
    topic: 'Introducción a MongoDB',
    subtopics: [
      {
        title: 'Base de Datos SQL vs Base de Datos No SQL',
        description:
          'En el presente capítulo aprenderemos cual es la diferencia entre una base de datos SQL y una base de datos No-SQL.',
      },
      {
        title: 'Tipos de Base de datos NoSQL',
        description:
          'En el capítulo aprenderemos cuales son los tipos de base de datos No-SQL más utilizadas en la industria de tecnología.',
      },
      {
        title: '¿Qué es MongoDB?',
        description:
          'En el presente capítulo aprenderemos sobre MongoDB y porque es necesario aprenderlo para la creación de nuestras aplicaciones.',
      },
    ],
  },
  {
    topic: 'Instalación de MongoDB',
    subtopics: [
      {
        title: 'Instalando MongoDB en Windows - Como servicio',
        description:
          'Ahora veremos como instalar MongoDB en Windows como servicio.',
      },
      {
        title: 'Instalando MongoDB en Windows - Sin servicio',
        description:
          'Ahora veremos como instalar MongoDB en Windows sin servicio.',
      },
      {
        title: 'Guía para desinstalar MongoDB',
        description:
          'Esto es una guía para poder desinstalar MongoDB si en caso queramos desinstalar MongoDB.',
      },
    ],
  },
  {
    topic: 'Introducción a MongoDB Shell',
    subtopics: [
      {
        title: 'Accediendo a mongosh Help',
        description:
          'Aprenderemos a como utilizar MongoDB Shell Help y como nos ayuda a encontrar los comandos que necesitamos.',
      },
      {
        title: 'Shell vs Drivers en MongoDB',
        description:
          'Es muy importante aprender las diferencias entre la Shell vs los Driver en MongoDB, es por ello que en este capítulo hablaremos a detalle de cada uno.',
      },
    ],
  },
  {
    topic: 'Aprendiendo operaciones CRUD básicas',
    subtopics: [
      {
        title: 'Como trabaja MongoDB internamente',
        description:
          'Es necesario aprender como trabaja MongoDB intermanete para poder desarrollar nuestras aplicaciones y poder vincularlo con MongoDB. Es por ello que aprenderemos a detalle como trabaja MongoDB.',
      },
      {
        title: 'Comprendiendo JSON',
        description:
          'En este capítulo vamos a comprender como se trabaja con JSON y cual es la estructura para poder almacenarlo en nuestra base de datos MongoDB.',
      },
      {
        title: 'Entendiendo Database, Collections y Documents',
        description:
          'Los primeros pasos que necesitamos aprender para manejar MongoDB de manera correcta es aprender sobra los Database, Collection y Documents. Es por ello que en el presente capítulo explicaremos a detalle.',
      },
      {
        title: 'Creación de una Base de Datos',
        description:
          'Ahora vamos a crear nuestra base de datos y sera lo primero que necesitamos para poder almacenar nuestros documentos dentro de MongoDB.',
      },
      {
        title: 'Creación de una Collections',
        description:
          'En el presente capítulo aprenderemos a crear nuestra colección para poder insertar y almacenar nuestros documentos en MongoDB.',
      },
      {
        title: 'Comparando JSON vs BSON',
        description:
          'En este capítulo vamos a comparar JSON vs BSON y veremos cuales son las diferencias entre cada uno de ellas.',
      },
      {
        title: 'Campo _id',
        description:
          'Es necesario conocer el campo "_id" para poder almacenar nuestros documentos y las distintas formas de utilizar.',
      },
      {
        title: 'Entendiendo Create, Read, Update y Delete(CRUD)',
        description:
          'Ahora vamos a entender las operaciones Create, Read, Update y Delete tambien llamadas operaciones CRUD que son las operaciones mas básicas que se debe dominar para llegar a un nivel experto en MongoDB.',
      },
      {
        title: 'Trabajando Create, Read, Update y Delete(CRUD)',
        description:
          'Ahora vamos a trabajar con las operaciones CREATE, READ, UPDATE y DELETE(CRUD) en MongoDB, y vamos a aplicar a ejercicios que se desarrollan en este capítulo.',
      },
      {
        title: 'Profundizando sobre “insertOne()” & “insertMany()”',
        description:
          'Es necesario profundizar sobre los métodos insertOne() e insertMany() en MongoDB y poder entender las diferencias entre cada una de ellas.',
      },
      {
        title: 'Profundizando en la busqueda de datos',
        description:
          'Profundizar en la busqueda de datos es muy necesario ya que nos permite obtener nuestros documentos y seguir profundizando al momento de realizar consultas hacia nuestro servidor MongoDB.',
      },
      {
        title: 'Profundizando sobre “updateOne()” & “updateMany()”',
        description:
          'Los métodos "updateOne()" y "updateMany()" son muy utilizados para poder actualizar los documentos en MongoDB, así que en esta capítulo vamos a aprender las diferencias y como utilizar cada uno de ellos.',
      },
      {
        title: 'Aprendiendo sobre “find()” & Cursor Object',
        description:
          'Es necesario aprender como funciona el método "find()" y sobre todo el Objeto Cursor dentro de MongoDB y como trabaja para que nos pueda devolver nuestros documentos.',
      },
      {
        title: 'Aprendiendo sobre “Projection”',
        description:
          'En este capítulos aprenderemos sobre el projection y como se utiliza en MongoDB.',
      },
      {
        title: 'Entendiendo Documentos Embebidos & Arrays',
        description:
          'Es necesario aprender los Documentos Embebidos y los Arrays para poder manejar MongoDB y realizar consultas.',
      },
      {
        title: 'Trabajando con Documentos Embebidos',
        description:
          'Ahora en este capítulo vamos a trabajar con los documentos embebidos y como podemos realizar consultas dentro de nuestra colección.',
      },
      {
        title: 'Trabajando con Arrays',
        description:
          'Trabajar con Array es muy importante por que los documentos en un ambiente real maneja multiples array y distintos tipos de arrays es por ello que este capítulo aprenderás como trabajar con los Arrays dentro de MongoDB.',
      },
      {
        title: 'Accediendo a la Estructura de Datos',
        description:
          'Es necesario poder acceder a la estructura de datos de nuestros documentos y como MongoDB los almacena para poder realizar nuestras consultas.',
      },
      {
        title: 'Es hora de practicar - Operaciones CRUD básicas',
        description:
          'Es hora de poner en practica todos nuestros conocimiento de MongoDB que hemos adquirido hasta ahora.',
      },
    ],
  },
  // {
  //   topic: 'Profundizando en las operaciones “Create”',
  //   subtopics: [{ title: '', description: '' }],
  // },
  // {
  //   topic: 'Profundizando en operaciones “Read”',
  //   subtopics: [{ title: '', description: '' }],
  // },
  // {
  //   topic: 'Profundizando en operaciones “Update”',
  //   subtopics: [{ title: '', description: '' }],
  // },
]
