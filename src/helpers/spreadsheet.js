import config from '../config';

/**
 * Load the stats from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A4:T"
      })
      .then(
        response => {
          const data = response.result.values;
          const stats = data.map(stat => ({
            category: stat[0],
            daily: stat[1],
            monthly: stat[2],
            year: stat[3]
          })) || [];
          callback({
            stats
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}