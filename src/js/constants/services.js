// export const ENDPOINT = 'http://localhost:8080/data.json';


//
export const CLIENT_ID = "3";
export const REDIRECT_URL = "http://localhost:3000/callback";
export const SECRET = "dBrNw2l3H05fzOBojrG1gL42OyTWOB6Kfdi3NaKy";

// Primeiro endpoint para obter o código de autorização
export const AUTH_ENDPOINT = 'http://localhost:8080/oauth/authorize?' +
    'client_id='+CLIENT_ID +
    '&redirect_url='+REDIRECT_URL +
    '&response_type=code';

// Segundo endpoint para obter o Access Token
export const TOKEN_ENDPOINT = 'http://localhost:8080/oauth/token';

// OBTER O UTILIZADOR
export const USER_ENDPOINT = 'http://localhost:8080/api/user';
