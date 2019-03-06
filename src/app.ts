import express from 'express';
import fs from 'fs';
import util from 'util';

const readdir = util.promisify(fs.readdir);

const app = express();

app.set('port', process.env.PORT || 3000);

app.all(/.*/, async (req: express.Request, res: express.Response) => {
  const filenames = await readdir('.');
  // res.send(filenames.join("<br/>"));
  res.json({
    name: 'ali',
  });
});

app.listen(app.get('port') || 3000, () => {
  // tslint:disable-next-line:no-console
  console.log('listening on localhost:' + app.get('port'));
});
