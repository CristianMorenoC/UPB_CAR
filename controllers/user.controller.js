
exports.createNewUser = ( async (req, res, next)=> {

    const { nombre, email, password } = req.body;

    if(!nombre || !email || !password){
        res.status(400).json({
            status: 'Error',
            message: 'Invalid credentianls '
        })
        return;
    };


    res.status(201).json({
        status: 'success',
        message: 'the user has been created'
    })

});