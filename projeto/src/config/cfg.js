const cfg = () => {
    return {
        jwt_secret: "V$C0D&",
        jwt_expires: "1d",
        salt: 10,
        db_path: "mongodb+srv://breno:Bre13041305@clustercliente.atrqf.mongodb.net/?retryWrites=true&w=majority"
    };
};

module.exports = cfg();