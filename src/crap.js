// import React, { useState, useEffect } from 'react';
var { google } = require('googleapis');
// const { JWT } = require('google-auth-library');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../observer-acc.json');

const SPREADSHEET_ID = "1qqvAXjQJLTwMTOPHT_vTN4Bitz9xziiO4rXTbcKhI6Q";

const GOOGLE_AUTH_SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',

  // the list from the sheets v4 auth for spreadsheets.get
  // 'https://www.googleapis.com/auth/drive',
  // 'https://www.googleapis.com/auth/drive.readonly',
  // 'https://www.googleapis.com/auth/drive.file',
  // 'https://www.googleapis.com/auth/spreadsheets',
  // 'https://www.googleapis.com/auth/spreadsheets',
];

function authenticate() {
  const client = new google.auth.JWT(
    creds.client_email,
    null,
    creds.private_key,
    GOOGLE_AUTH_SCOPES,
    null
  );

  return new Promise((resolve, reject) => {
    client.authorize((err, tokens) => {
        if (err) {
            reject(err);
        } else {
            google.options({
                auth: client
            });
            resolve();
        }
    });
  });
  }

function listStats() {
  const client = authenticate();
  const sheets = google.sheets({version: 'v4', client});
  sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A4:T",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });

}

listStats();

