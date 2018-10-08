const secrets = {
    dbUri: 'mongodb://jzbonner:Jarrett16@ds119853.mlab.com:47079/finance-tracker', 
}

export const getSecret = key => secrets[key]; 
