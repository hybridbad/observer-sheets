## The UR Observer

Testing out Google Sheets API to pull data from a spreadsheet and display on a web page. If you want to use it just edit .config.json and put your own sheets api key and spreadsheet (make sure its a public spreadsheet).

```
export default {
  apiKey: <YOUR KEY HERE>,
  discoveryDocs: 
    ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: <YOUR SPREADSHEET ID HERE>
};

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
