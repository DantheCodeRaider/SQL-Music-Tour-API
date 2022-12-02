'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      name: 'The Useful Books',
      genre: 'Rock',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}

//# sequelize model:generate --name Band --attributes "band_id:integer, name:string, genre:text, available_start_time:date, end_time:date" --force true
//# sequelize model:generate --name Stage --attributes "stage_id:integer, stage_name:string"
//# sequelize model:generate --name Event --attributes "event_id:integer, name:string, event_date:date, start_time:date, end_time:date" --force true
//# sequelize model:generate --name MeetGreet --attributes "meet_greet_id:integer, event_id:integer, band_id:integer,meet_start_time:date, meet_end_time:date" --force true
//# sequelize model:generate --name SetTime --attributes "set_time_id:integer, event_id:integer, stage_id:integer,band_id:integer, start_time:date, end_time:date" --force true
//# sequelize model:generate --name StageEvent --attributes "stage_events_id:integer, event_id:integer, band_id:integer, meet_start_time:date, meet_end_time:date" --force true
