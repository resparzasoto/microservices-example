import dotenv from 'dotenv';

dotenv.config();

const environment = {
    PORT: process.env.PORT || 3000
}

export default environment;