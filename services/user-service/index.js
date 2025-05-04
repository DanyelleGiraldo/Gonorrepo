require('dotenv').config();
const MongoDB = require('./src/config/db')

const app = express();
app.use(express.json)

MongoDB();

app.use('/api/user')
