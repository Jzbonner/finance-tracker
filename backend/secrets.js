const secrets = {
    dbUri: 'mongodb://Jzbonner:Jarrett16@ds147079.mlab.com:47079/finance-tracker', 
}

export const getSecret = key => secrets[key]; 
