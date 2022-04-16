/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const routes = (handler) => [
    {
      method: 'POST',
      path: '/notes',
      handler: handler.postNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: handler.getNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: handler.getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: handler.putNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: handler.deleteNoteByIdHandler,
    },
];
   
module.exports = routes;